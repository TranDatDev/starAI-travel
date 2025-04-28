import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Province, ProvinceDocument } from './schemas/province.schema';
import { District, DistrictDocument } from './schemas/district.schema';
import { Commune, CommuneDocument } from './schemas/commune.schema';
import { GetProvinceDto } from './dto/get-province.dto';
import { GetDistrictDto } from './dto/get-district.dto';
import { GetCommuneDto } from './dto/get-commune.dto';
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
  async getProvinces(): Promise<GetProvinceDto[]> {
    const provinces = await this.provinceModel.find().exec();
    return provinces.map((province) => ({
      shortId: province.shortId,
      fullName: province.fullName || '',
    }));
  }

  async getDistricts(): Promise<GetDistrictDto[]> {
    const districts = await this.districtModel.find().exec();
    return districts.map((district) => ({
      shortId: district.shortId,
      fullName: district.fullName || '',
    }));
  }

  async getCommunes(): Promise<GetCommuneDto[]> {
    const communes = await this.communeModel.find().exec();
    return communes.map((commune) => ({
      shortId: commune.shortId,
      fullName: commune.fullName || '',
    }));
  }

  async getDistrictsByProvince(slug: string): Promise<GetDistrictDto[]> {
    const province = await this.provinceModel.findOne({
      slug: { $regex: `^${slug}`, $options: 'i' },
    });
    if (!province) {
      throw new NotFoundException('Province not found');
    }

    const districts = await this.districtModel
      .find({ provinceId: province._id })
      .exec();
    return districts.map((district) => ({
      shortId: district.shortId,
      fullName: district.fullName || '',
    }));
  }

  async getCommunesByDistrict(slug: string): Promise<GetCommuneDto[]> {
    const district = await this.districtModel.findOne({
      slug: { $regex: `^${slug}`, $options: 'i' },
    });
    if (!district) {
      throw new NotFoundException('District not found');
    }

    const communes = await this.communeModel
      .find({ districtId: district._id })
      .exec();
    return communes.map((commune) => ({
      shortId: commune.shortId,
      fullName: commune.fullName || '',
    }));
  }
}
