import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './schemas/restaurant.schema';
import { RestaurantFilterDto } from './dto/restaurant-filter.dto';
import { SupabaseService } from '../supabase/supabase.service';
import { buildLocationAggregation } from 'src/shared/helpers/build-location-aggregation.helper';
@Injectable()
export class RestaurantService {
  constructor(
    @InjectModel(Restaurant.name)
    private restaurantModel: Model<RestaurantDocument>,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(data: Partial<Restaurant>): Promise<Restaurant> {
    const newRestaurant = new this.restaurantModel(data);
    return newRestaurant.save();
  }

  async findAll(filterDto: RestaurantFilterDto): Promise<any> {
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
    const result = await this.restaurantModel.aggregate(pipeline).exec();
    const data = result[0].data;
    const total = result[0].total[0]?.count || 0;

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findById(id).exec();
    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return restaurant;
  }

  async findByShortId(shortId: string): Promise<Restaurant> {
    const restaurant = await this.restaurantModel.findOne({ shortId }).exec();
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with shortId ${shortId} not found`,
      );
    }
    return restaurant;
  }

  async update(id: string, data: Partial<Restaurant>): Promise<Restaurant> {
    const updatedRestaurant = await this.restaurantModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedRestaurant) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
    return updatedRestaurant;
  }

  async remove(id: string): Promise<void> {
    const result = await this.restaurantModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Restaurant with ID ${id} not found`);
    }
  }

  async addImageToRestaurant(
    shortId: string,
    imageUrl: string,
  ): Promise<Restaurant> {
    const restaurant = await this.findByShortId(shortId);
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with shortId ${shortId} not found`,
      );
    }

    // Thêm URL ảnh vào mảng images trong cơ sở dữ liệu
    restaurant.images.push(imageUrl);
    return (restaurant as RestaurantDocument).save();
  }

  async findAllWithLocation(): Promise<RestaurantDocument[]> {
    return this.restaurantModel
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
