import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from './location.service';
import { ApiOperation, ApiQuery, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('API công cộng: Vị trí hành chính')
@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách tỉnh, huyện, xã theo slug' })
  @ApiQuery({
    name: 'p',
    required: false,
    description: 'Slug của tỉnh/thành phố (ví dụ: ho-chi-minh)',
    example: 'ho-chi-minh',
  })
  @ApiQuery({
    name: 'd',
    required: false,
    description: 'Slug của quận/huyện (ví dụ: quan-1)',
    example: 'quan-1',
  })
  @ApiQuery({
    name: 'c',
    required: false,
    description: 'Slug của phường/xã (ví dụ: phuong-ben-nghe)',
    example: 'phuong-ben-nghe',
  })
  @ApiResponse({
    status: 200,
    description: 'Danh sách địa phương được tìm thấy.',
  })
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
