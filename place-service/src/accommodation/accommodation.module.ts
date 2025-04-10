import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationService } from './accommodation.service';
import {
  Accommodation,
  AccommodationSchema,
} from './schemas/accommodation.schema';
import { AccommodationPrivateController } from './accommodation.private.controller';
import { AccommodationPublicController } from './accommodation.public.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accommodation.name, schema: AccommodationSchema },
    ]),
  ],
  controllers: [AccommodationPrivateController, AccommodationPublicController],
  providers: [AccommodationService],
})
export class AccommodationModule {}
