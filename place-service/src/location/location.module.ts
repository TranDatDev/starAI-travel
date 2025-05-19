import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationService } from './location.service';
import { Province, ProvinceSchema } from './schemas/province.schema';
import { District, DistrictSchema } from './schemas/district.schema';
import { Commune, CommuneSchema } from './schemas/commune.schema';
import { LocationPublicController } from './location.public.controller';
import { LocationPrivateController } from './location.private.controller';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Province.name, schema: ProvinceSchema },
      { name: District.name, schema: DistrictSchema },
      { name: Commune.name, schema: CommuneSchema },
    ]),
  ],
  controllers: [LocationPublicController, LocationPrivateController],
  providers: [LocationService],
})
export class LocationModule {}
