import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { generateSlug } from '../../utils/slug.util';
import { District } from './district.schema';

export type CommuneDocument = Commune & Document;

@Schema({ timestamps: true })
export class Commune {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ default: () => nanoid(8), unique: true, index: true })
  shortId: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  nameEn?: string;

  @Prop()
  fullName?: string;

  @Prop()
  fullNameEn?: string;

  @Prop({ type: String, unique: true })
  slug: string;

  @Prop({ type: Types.ObjectId, ref: District.name, required: true })
  districtId: Types.ObjectId;
}

export const CommuneSchema = SchemaFactory.createForClass(Commune);

CommuneSchema.pre<CommuneDocument>('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = generateSlug(this.name);
  }
  next();
});
