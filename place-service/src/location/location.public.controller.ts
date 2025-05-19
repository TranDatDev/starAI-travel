import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiOperation, ApiQuery, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('API công cộng: Vị trí hành chính')
@Controller({ path: '/public/location', version: '1' })
export class LocationPublicController {
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
  @ApiOperation({
    summary:
      'Lấy danh sách tất cả các quận/huyện và các quận/huyện theo tỉnh/tptttw',
  })
  @ApiQuery({
    name: 'by',
    required: true,
    description: 'Slug của tỉnh/tpttw',
  })
  @ApiResponse({
    status: 200,
    description: 'Danh sách quận/huyện được tìm thấy.',
  })
  async getDistricts(@Query('by') slug?: string) {
    if (slug) {
      return this.locationService.getDistrictsByProvince(slug);
    }
    return this.locationService.getDistricts();
  }

  @Get('/communes')
  @ApiOperation({
    summary: 'Lấy danh sách tất cả các xã và các xã theo quận/huyện',
  })
  @ApiQuery({
    name: 'by',
    required: false,
    description: 'Slug của quận/huyện',
  })
  @ApiResponse({
    status: 200,
    description: 'Danh sách xã được tìm thấy.',
  })
  async getCommunes(@Query('by') slug?: string) {
    if (slug) {
      return this.locationService.getCommunesByDistrict(slug);
    }
    return this.locationService.getCommunes();
  }

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
