import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { generateSlugWithShortId } from 'src/utils/slug.util';
import { Commune } from 'src/location/schemas/commune.schema';
import { District } from 'src/location/schemas/district.schema';
import { Province } from 'src/location/schemas/province.schema';

export type AttractionDocument = Attraction & Document;

@Schema({ timestamps: true })
export class Attraction {
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
      'natural',
      'historical',
      'museum',
      'amusement-park',
      'cultural',
      'religious',
      'landscape',
      'shopping',
    ],
    default: 'natural',
  })
  category: string;

  @Prop({ type: [String], default: [] })
  images: string[];

  @Prop({ type: Number, min: 1, max: 5, default: null })
  officialRating?: number;

  @Prop({ type: Number, min: 0, max: 5, default: 0 })
  userRating: number;

  @Prop({ default: 0 })
  reviewsCount: number;

  @Prop({ type: String })
  contactPhone?: string;

  @Prop({ type: String })
  contactEmail?: string;

  @Prop({ type: String })
  website?: string;

  @Prop({ type: [String], default: [] })
  openingHours?: string[];

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

export const AttractionSchema = SchemaFactory.createForClass(Attraction);

AttractionSchema.pre<AttractionDocument>('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = generateSlugWithShortId(this.name, this.shortId);
  }
  next();
});
