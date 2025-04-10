import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async getLocation(
    @Query('p') provinceSlug?: string,
    @Query('d') districtSlug?: string,
    @Query('c') communeSlug?: string,
  ) {
    return this.locationService.getLocationBySlugs(
      provinceSlug,
      districtSlug,
      communeSlug,
    );
  }
}
