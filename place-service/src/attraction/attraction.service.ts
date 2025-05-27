import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attraction, AttractionDocument } from './schemas/attraction.schema';
import { AttractionFilterDto } from './dto/attraction-filter.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { buildLocationAggregation } from 'src/shared/helpers/build-location-aggregation.helper';
@Injectable()
export class AttractionService {
  constructor(
    @InjectModel(Attraction.name)
    private attractionModel: Model<AttractionDocument>,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(data: Partial<Attraction>): Promise<Attraction> {
    const newAttraction = new this.attractionModel(data);
    return newAttraction.save();
  }

  async findAll(filterDto: AttractionFilterDto): Promise<any> {
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

    const baseMatch: any = {
      isDeleted: { $ne: true },
    };

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
    const result = await this.attractionModel.aggregate(pipeline).exec();
    const data = result[0].data;
    const total = result[0].total[0]?.count || 0;

    return {
      data,
      total,
      page,
      limit,
    };
  }
  async findAllByAdmin(filterDto: AttractionFilterDto): Promise<any> {
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

    if (search) {
      baseMatch.$or = [
        { slug: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (category) baseMatch.category = category;
    if (typeof isAvailable === 'boolean') baseMatch.isAvailable = isAvailable;
    if (typeof isFeatured === 'boolean') baseMatch.isFeatured = isFeatured;

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
      address: 1,
      communeId: 1,
      districtId: 1,
      provinceId: 1,
      images: 1,
      maxGuests: 1,
      maxRooms: 1,
      officialRating: 1,
      userRating: 1,
      reviewsCount: 1,
      contactPhone: 1,
      contactEmail: 1,
      isDeleted: 1,
      isAvailable: 1,
      isFeatured: 1,
      openingHours: 1,
      website: 1,
      tags: 1,
      policies: 1,
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
    };

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

    const result = await this.attractionModel.aggregate(pipeline).exec();
    const data = result[0].data;
    const total = result[0].total[0]?.count || 0;

    return {
      data,
      total,
      page,
      limit,
    };
  }
  async findOne(id: string): Promise<any> {
    const result = await this.attractionModel
      .aggregate([
        {
          $match: { _id: id },
        },
        {
          $lookup: {
            from: 'communes',
            localField: 'communeId',
            foreignField: 'shortId',
            as: 'commune',
          },
        },
        { $unwind: { path: '$commune', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'districts',
            localField: 'commune.districtId',
            foreignField: '_id',
            as: 'district',
          },
        },
        { $unwind: { path: '$district', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'provinces',
            localField: 'district.provinceId',
            foreignField: '_id',
            as: 'province',
          },
        },
        { $unwind: { path: '$province', preserveNullAndEmptyArrays: true } },
        {
          $project: {
            name: 1,
            description: 1,
            category: 1,
            minPrice: 1,
            maxPrice: 1,
            images: 1,
            maxGuests: 1,
            maxRooms: 1,
            officialRating: 1,
            userRating: 1,
            reviewsCount: 1,
            amenities: 1,
            contactPhone: 1,
            contactEmail: 1,
            isAvailable: 1,
            isFeatured: 1,
            tags: 1,
            website: 1,
            openingHours: 1,
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
          },
        },
      ])
      .exec();

    if (!result || result.length === 0) {
      throw new NotFoundException(`Attraction with ID ${id} not found`);
    }
    return result[0];
  }

  async findByShortId(shortId: string): Promise<any> {
    const result = await this.attractionModel
      .aggregate([
        {
          $match: { shortId },
        },
        {
          $lookup: {
            from: 'communes',
            localField: 'communeId',
            foreignField: 'shortId',
            as: 'commune',
          },
        },
        { $unwind: { path: '$commune', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'districts',
            localField: 'commune.districtId',
            foreignField: '_id',
            as: 'district',
          },
        },
        { $unwind: { path: '$district', preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: 'provinces',
            localField: 'district.provinceId',
            foreignField: '_id',
            as: 'province',
          },
        },
        { $unwind: { path: '$province', preserveNullAndEmptyArrays: true } },
        {
          $project: {
            name: 1,
            description: 1,
            category: 1,
            minPrice: 1,
            maxPrice: 1,
            images: 1,
            maxGuests: 1,
            maxRooms: 1,
            officialRating: 1,
            userRating: 1,
            reviewsCount: 1,
            amenities: 1,
            contactPhone: 1,
            contactEmail: 1,
            isAvailable: 1,
            isFeatured: 1,
            tags: 1,
            policies: 1,
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
          },
        },
      ])
      .exec();

    if (!result || result.length === 0) {
      throw new NotFoundException(
        `Attraction with shortId ${shortId} not found`,
      );
    }

    return result[0];
  }

  async update(id: string, data: Partial<Attraction>): Promise<Attraction> {
    const updatedAttraction = await this.attractionModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedAttraction) {
      throw new NotFoundException(`Attraction with ID ${id} not found`);
    }
    return updatedAttraction;
  }

  async updateDescriptionByLanguage(
    id: string,
    lang: string,
    value: string,
  ): Promise<Attraction> {
    const updatedAttraction = await this.attractionModel
      .findByIdAndUpdate(
        id,
        { $set: { [`description.${lang}`]: value } },
        { new: true },
      )
      .select('description');

    if (!updatedAttraction) {
      throw new NotFoundException(`Attraction with ID ${id} not found`);
    }

    return updatedAttraction;
  }

  async remove(id: string, type: 'soft' | 'hard' = 'soft'): Promise<void> {
    if (type === 'soft') {
      const result = await this.attractionModel
        .findByIdAndUpdate(id, { isDeleted: true }, { new: true })
        .exec();
      if (!result) {
        throw new NotFoundException(`Attraction with ID ${id} not found`);
      }
    } else {
      const result = await this.attractionModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Attraction with ID ${id} not found`);
      }
    }
  }

  async findByShortIdForUpdate(
    shortId: string,
  ): Promise<AttractionDocument | null> {
    return this.attractionModel.findOne({ shortId });
  }

  async addImageToAttraction(
    shortId: string,
    imageUrl: string,
  ): Promise<Attraction> {
    const attraction = await this.findByShortIdForUpdate(shortId);
    if (!attraction) {
      throw new NotFoundException(
        `Attraction with shortId ${shortId} not found`,
      );
    }

    // Thêm URL ảnh vào mảng images trong cơ sở dữ liệu
    attraction.images.push(imageUrl);
    return (attraction as AttractionDocument).save();
  }

  async findAllWithLocation(): Promise<AttractionDocument[]> {
    return this.attractionModel
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
