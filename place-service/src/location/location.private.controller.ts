import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiOperation, ApiQuery, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('API công cộng: Vị trí hành chính')
@Controller({ path: '/private/location', version: '1' })
export class LocationPrivateController {
  constructor(private readonly locationService: LocationService) {}

  @Get('/provinces')
  @ApiOperation({ summary: 'Lấy danh sách tất cả các tỉnh/tpttw' })
  @ApiResponse({
    status: 200,
    description: 'Lấy danh sách tỉnh thành công',
  })
  async getProvinces() {
    return this.locationService.getProvinces();
  }

  @Get('/districts')
  async getDistrictsByProvinceId(@Query('provinceId') shortId?: string) {
    if (shortId) {
      return this.locationService.getDistrictsByProvinceShortId(shortId);
    }
    return this.locationService.getDistricts();
  }

  @Get('/communes')
  async getCommunesByProvinceId(@Query('districtId') shortId?: string) {
    if (shortId) {
      return this.locationService.getCommunesByDistrictShortId(shortId);
    }
    return this.locationService.getCommunes();
  }

  @Get('/communes')
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
