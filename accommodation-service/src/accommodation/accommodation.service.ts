import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Accommodation,
  AccommodationDocument,
} from './schemas/accommodation.schema';

@Injectable()
export class AccommodationService {
  constructor(
    @InjectModel(Accommodation.name)
    private accommodationModel: Model<AccommodationDocument>,
  ) {}

  async create(data: Partial<Accommodation>): Promise<Accommodation> {
    const newAccommodation = new this.accommodationModel(data);
    return newAccommodation.save();
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.accommodationModel.find().skip(skip).limit(limit).exec(),
      this.accommodationModel.countDocuments(),
    ]);

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
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
}
