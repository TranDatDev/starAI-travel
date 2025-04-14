import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { generateSlugWithShortId } from 'src/utils/slug.util';
import { Commune } from 'src/location/schemas/commune.schema';
import { District } from 'src/location/schemas/district.schema';
import { Province } from 'src/location/schemas/province.schema';

export type AccommodationDocument = Accommodation & Document;

@Schema({ timestamps: true })
export class Accommodation {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: () => nanoid(8), unique: true, index: true })
  shortId: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({ required: true, trim: true })
  address: string;

  @Prop({ type: Types.ObjectId, ref: Commune.name, required: true })
  communeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: District.name, required: true })
  districtId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Province.name, required: true })
  provinceId: Types.ObjectId;

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
  isDeleted: boolean;

  @Prop({ default: false })
  isFeatured: boolean;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: String })
  ManagerId: string;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);

AccommodationSchema.pre<AccommodationDocument>('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = generateSlugWithShortId(this.name, this.shortId);
  }
  next();
});
