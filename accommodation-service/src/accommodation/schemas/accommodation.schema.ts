import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type AccommodationDocument = Accommodation & Document;

@Schema()
export class Accommodation {
  @Prop({ type: String, default: uuidv4 })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  location: string;

  @Prop()
  price: number;
}

export const AccommodationSchema = SchemaFactory.createForClass(Accommodation);
