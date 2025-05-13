import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { generateSlugWithShortId } from 'src/utils/slug.util';
import { Commune } from 'src/location/schemas/commune.schema';
import { LocalizedDescription } from 'src/shared/types/localizedDescription';
export type RestaurantDocument = Restaurant & Document;

@Schema({ timestamps: true })
export class Restaurant {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ type: String, default: () => nanoid(8), unique: true, index: true })
  shortId: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Object, required: true, trim: true })
  description: LocalizedDescription;

  @Prop({ required: true, trim: true })
  address: string;

  @Prop({ type: [String], default: [] })
  tags: string[];

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop({ type: Number, min: 1, max: 5, default: null })
  officialRating?: number;

  @Prop({ type: Number, min: 0, default: 0 })
  reviewsTotal: number;

  @Prop({ type: Number, min: 0, default: 0 })
  reviewsCount: number;

  @Prop({ type: Number, min: 0, max: 5, default: 0 })
  userRating: number;

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
  openingHours?: string[];

  @Prop({ type: String })
  website?: string;

  @Prop({ type: [String], default: [] })
  amenities: string[];

  @Prop({ type: [String], default: [] })
  cuisines: string[];

  @Prop({ required: true, min: 0 })
  minPrice: number;

  @Prop({ required: true, min: 0 })
  maxPrice: number;

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
    enum: [
      'buffet',
      'casual',
      'fine-dining',
      'cafe',
      'street-food',
      'fast-food',
    ],
    default: 'casual',
  })
  category: string;

  @Prop({ type: String })
  adminId: string;

  @Prop({ type: Types.ObjectId, ref: Commune.name, required: true })
  communeId: Types.ObjectId;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);

RestaurantSchema.pre<RestaurantDocument>('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = generateSlugWithShortId(this.name, this.shortId);
  }
  next();
});

RestaurantSchema.pre<RestaurantDocument>('save', function (next) {
  if (this.reviewsCount > 0) {
    this.userRating = this.reviewsTotal / this.reviewsCount;
  } else {
    this.userRating = 0;
  }
  next();
});
