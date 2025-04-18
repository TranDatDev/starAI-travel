import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Accommodation,
  AccommodationDocument,
} from './schemas/accommodation.schema';
import { AccommodationFilterDto } from './dto/accommodation-filter.dto';
import { SupabaseService } from '../supabase/supabase.service';
import mongoose from 'mongoose';
import { buildLocationAggregation } from 'src/shared/helpers/build-location-aggregation.helper';
@Injectable()
export class AccommodationService {
  constructor(
    @InjectModel(Accommodation.name)
    private accommodationModel: Model<AccommodationDocument>,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(data: Partial<Accommodation>): Promise<Accommodation> {
    const newAccommodation = new this.accommodationModel(data);
    return newAccommodation.save();
  }

  async findAll(filterDto: AccommodationFilterDto): Promise<any> {
    const {
      search,
      communeId,
      districtId,
      provinceId,
      communeSlug,
      districtSlug,
      provinceSlug,
      sortBy,
      sortOrder,
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      isAvailable,
      isFeatured,
    } = filterDto;

    const baseMatch: any = {};

    // Tìm kiếm bằng thanh tìm kiếm
    if (search) {
      baseMatch.$or = [
        { slug: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) baseMatch.category = category;
    if (typeof isAvailable === 'boolean') baseMatch.isAvailable = isAvailable;
    if (typeof isFeatured === 'boolean') baseMatch.isFeatured = isFeatured;

    // tìm kiếm theo giá
    if (minPrice !== undefined || maxPrice !== undefined) {
      if (minPrice !== undefined) baseMatch.maxPrice = { $gte: minPrice };
      if (maxPrice !== undefined) baseMatch.minPrice = { $lte: maxPrice };
    }

    const projectFields = {
      shortId: 1,
      name: 1,
      description: 1,
      minPrice: 1,
      maxPrice: 1,
      category: 1,
      createdAt: 1,
      // Hợp nhất địa chỉ thành một trường duy nhất
      fullAddress: {
        $concat: [
          '$address',
          ', ',
          { $ifNull: ['$commune.fullName', ''] },
          ', ',
          { $ifNull: ['$district.fullName', ''] },
          ', ',
          { $ifNull: ['$province.fullName', ''] },
        ],
      },
      _id: 0,
    };
    // tổng hợp ống dẫn dữ liệu theo vị trí hành chính
    const pipeline = buildLocationAggregation({
      baseMatch,
      communeId,
      districtId,
      provinceId,
      communeSlug,
      districtSlug,
      provinceSlug,
      sortBy,
      sortOrder,
      page,
      limit,
      projectFields,
    });
    // tổng hợp kết quả từ dữ liệu nhận được theo ống dẫn
    const result = await this.accommodationModel.aggregate(pipeline).exec();
    const data = result[0].data;
    const total = result[0].total[0]?.count || 0;

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<Accommodation> {
    const accommodation = await this.accommodationModel.findById(id).exec();
    if (!accommodation) {
      throw new NotFoundException(`Accommodation with ID ${id} not found`);
    }
    return accommodation;
  }

  async findByShortId(shortId: string): Promise<Accommodation> {
    const accommodation = await this.accommodationModel
      .findOne({ shortId })
      .exec();
    if (!accommodation) {
      throw new NotFoundException(
        `Accommodation with shortId ${shortId} not found`,
      );
    }
    return accommodation;
  }

  async update(
    id: string,
    data: Partial<Accommodation>,
  ): Promise<Accommodation> {
    const updatedAccommodation = await this.accommodationModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedAccommodation) {
      throw new NotFoundException(`Accommodation with ID ${id} not found`);
    }
    return updatedAccommodation;
  }

  async remove(id: string): Promise<void> {
    const result = await this.accommodationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Accommodation with ID ${id} not found`);
    }
  }

  async addImageToAccommodation(
    shortId: string,
    imageUrl: string,
  ): Promise<Accommodation> {
    const accommodation = await this.findByShortId(shortId);
    if (!accommodation) {
      throw new NotFoundException(
        `Accommodation with shortId ${shortId} not found`,
      );
    }

    // Thêm URL ảnh vào mảng images trong cơ sở dữ liệu
    accommodation.images.push(imageUrl);
    return (accommodation as AccommodationDocument).save();
  }

  async findAllWithLocation(): Promise<AccommodationDocument[]> {
    return this.accommodationModel
      .find()
      .populate({
        path: 'communeId',
        populate: {
          path: 'districtId',
          populate: {
            path: 'provinceId',
          },
        },
      })
      .exec();
  }
}
