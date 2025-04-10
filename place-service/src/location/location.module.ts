import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationService } from './location.service';
import { LocationController } from './location.public.controller';
import { Province, ProvinceSchema } from './schemas/province.schema';
import { District, DistrictSchema } from './schemas/district.schema';
import { Commune, CommuneSchema } from './schemas/commune.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Province.name, schema: ProvinceSchema },
      { name: District.name, schema: DistrictSchema },
      { name: Commune.name, schema: CommuneSchema },
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
