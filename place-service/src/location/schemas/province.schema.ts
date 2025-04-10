import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import { generateSlug } from '../../utils/slug.util';

export type ProvinceDocument = Province & Document;

@Schema({ timestamps: true })
export class Province {
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
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);

ProvinceSchema.pre<ProvinceDocument>('save', function (next) {
  if (!this.slug && this.name) {
    this.slug = generateSlug(this.name);
  }
  next();
});
