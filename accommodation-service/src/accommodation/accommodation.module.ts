import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationService } from './accommodation.service';
import { AccommodationController } from './accommodation.controller';
import {
  Accommodation,
  AccommodationSchema,
} from './schemas/accommodation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accommodation.name, schema: AccommodationSchema },
    ]),
  ],
  controllers: [AccommodationController],
  providers: [AccommodationService],
})
export class AccommodationModule {}
