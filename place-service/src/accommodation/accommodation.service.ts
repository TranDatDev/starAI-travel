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

  async findAll(filterDto: AccommodationFilterDto) {
    const {
      name,
      communeId,
      districtId,
      provinceId,
      category,
      minPrice,
      maxPrice,
      isAvailable,
      isFeatured,
      page = 1,
      limit = 10,
    } = filterDto;

    const query: any = {
      isDeleted: false,
    };

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    if (communeId) query.communeId = communeId;
    if (districtId) query.districtId = districtId;
    if (provinceId) query.provinceId = provinceId;
    if (category) query.category = category;
    if (isAvailable !== undefined) query.isAvailable = isAvailable;
    if (isFeatured !== undefined) query.isFeatured = isFeatured;

    if (minPrice !== undefined || maxPrice !== undefined) {
      query.minPrice = {};
      if (minPrice !== undefined) query.minPrice.$gte = minPrice;
      if (maxPrice !== undefined) query.minPrice.$lte = maxPrice;
    }

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.accommodationModel
        .find(query)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }),
      this.accommodationModel.countDocuments(query),
    ]);

    return {
      total,
      page,
      limit,
      data,
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
}
