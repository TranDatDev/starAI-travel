import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Province, ProvinceDocument } from './schemas/province.schema';
import { District, DistrictDocument } from './schemas/district.schema';
import { Commune, CommuneDocument } from './schemas/commune.schema';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Province.name) private provinceModel: Model<ProvinceDocument>,
    @InjectModel(District.name) private districtModel: Model<DistrictDocument>,
    @InjectModel(Commune.name) private communeModel: Model<CommuneDocument>,
  ) {}

  async getAllProvinces() {
    return this.provinceModel.find().sort('name').exec();
  }

  async getLocationBySlugs(
    provinceSlug?: string,
    districtSlug?: string,
    communeSlug?: string,
  ) {
    if (!provinceSlug) {
      return this.getAllProvinces();
    }

    const province = await this.provinceModel.findOne({
      slug: { $regex: `^${provinceSlug}`, $options: 'i' },
    });
    if (!province) throw new NotFoundException('Province not found');

    if (!districtSlug) {
      return this.districtModel
        .find({ provinceId: province._id })
        .sort('name')
        .exec();
    }

    const district = await this.districtModel.findOne({
      slug: { $regex: `^${districtSlug}`, $options: 'i' },
      provinceId: province._id,
    });
    if (!district) {
      throw new NotFoundException('District not found in this province');
    }

    if (!communeSlug) {
      return this.communeModel
        .find({ districtId: district._id })
        .sort('name')
        .exec();
    }

    const commune = await this.communeModel.findOne({
      slug: { $regex: `^${communeSlug}`, $options: 'i' },
      districtId: district._id,
    });
    if (!commune) {
      throw new NotFoundException('Commune not found in this district');
    }

    return {
      province,
      district,
      commune,
    };
  }

  async findCommunesByDistrictOrProvince(
    districtId?: string,
    provinceId?: string,
  ): Promise<CommuneDocument[]> {
    let query = {};

    if (districtId) {
      query = { districtId };
    } else if (provinceId) {
      const districts = await this.districtModel.find({ provinceId }).exec();
      const districtIds = districts.map((d) => d._id);
      query = { districtId: { $in: districtIds } };
    }

    return this.communeModel.find(query).exec();
  }
}
