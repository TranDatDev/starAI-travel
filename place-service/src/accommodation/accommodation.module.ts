import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationService } from './accommodation.service';
import {
  Accommodation,
  AccommodationSchema,
} from './schemas/accommodation.schema';
import { AccommodationPrivateController } from './accommodation.private.controller';
import { AccommodationPublicController } from './accommodation.public.controller';
import { SupabaseService } from '../supabase/supabase.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accommodation.name, schema: AccommodationSchema },
    ]),
  ],
  controllers: [AccommodationPrivateController, AccommodationPublicController],
  providers: [AccommodationService, SupabaseService],
})
export class AccommodationModule {}
