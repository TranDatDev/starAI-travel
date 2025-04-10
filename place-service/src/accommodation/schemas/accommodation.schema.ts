import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type AccommodationDocument = Accommodation & Document;
import { nanoid } from 'nanoid';
@Schema({ timestamps: true })
export class Accommodation {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: () => nanoid(8), unique: true, index: true })
  shortId: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({
    type: {
      address: { type: String, required: true },
      hamlet: { type: String },
      commune_type: {
        type: String,
        enum: ['Phường', 'Xã', 'Thị Trấn'],
        required: true,
      },
      commune_name: { type: String, required: true },
      district_type: {
        type: String,
        enum: [
          'Quận',
          'Huyện',
          'Thị xã',
          'Thành phố thuộc TPTTTW',
          'Thành phố thuộc tỉnh',
        ],
        required: true,
      },
      district_name: { type: String, required: true },
      province_type: { type: String, enum: ['TPTTTW', 'Tỉnh'], required: true },
      province_name: { type: String, required: true },
      country: { type: String, default: 'Vietnam' },
      postcode: { type: String },
    },
    required: true,
  })
  location: {
    address: string;
    hamlet?: string;
    commune_type: string;
    commune_name: string;
    district_type: string;
    district_name: string;
    province_type: string;
    province_name: string;
    postcode?: string;
    country: string;
  };
  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: (value: number[]) =>
          value.length === 2 &&
          value[0] >= -180 &&
          value[0] <= 180 &&
          value[1] >= -90 &&
          value[1] <= 90,
        message:
          'Coordinates must be [longitude, latitude] within valid range.',
      },
    },
  })
  coordinates: {
    type: 'Point';
    coordinates: [number, number];
  };
  @Prop({
    type: {
      cancellation: { type: String },
      checkIn: { type: String },
      checkOut: { type: String },
    },
    default: {},
  })
  policies?: {
    cancellation?: string;
    checkIn?: string;
    checkOut?: string;
  };

  @Prop({
    enum: [
      'hotel',
      'villa',
      'apartment',
      'cruise',
      'guesthouse',
      'homestay',
      'campground',
    ],
    default: 'homestay',
  })
  category: string;

  @Prop({ required: true, min: 0 })
  minPrice: number;

  @Prop({ required: true, min: 0 })
  maxPrice: number;

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop({ default: 1, min: 1 })
  maxGuests: number;

  @Prop({ default: 1, min: 1 })
  maxRooms: number;

  @Prop({ default: 0 })
  rating: number;

  @Prop({ type: Number, min: 1, max: 5, default: null })
  officialRating?: number;

  @Prop({ type: Number, min: 0, max: 5, default: 0 })
  userRating: number;

  @Prop({ default: 0 })
  reviewsCount: number;

  @Prop({ type: [String], default: [] })
  amenities: string[];

  @Prop({ type: String })
  contactPhone?: string;

  @Prop({ type: String })
  contactEmail?: string;

  @Prop({ default: true })
  isAvailable: boolean;

  @Prop({ default: false })
  isFeatured: boolean;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: String })
  ManagerId: string;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
