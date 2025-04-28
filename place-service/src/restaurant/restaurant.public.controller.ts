import {
  Controller,
  Get,
  Post,
  Query,
  Param,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schema';
import { RestaurantFilterDto } from './dto/restaurant-filter.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { SupabaseService } from '../supabase/supabase.service';
import { RestaurantDto } from './dto/restaurant.dto';

@ApiTags('API công cộng: Nhà hàng')
@Controller({ path: '/public/restaurant', version: '1' })
export class RestaurantPublicController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly supabaseService: SupabaseService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách các nhà hàng' })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Tên nhà hàng',
    example: 'Nhà Hàng Bình Minh',
  })
  @ApiQuery({
    name: 'communeId',
    required: false,
    example: 'RF1YJaEm',
  })
  @ApiQuery({
    name: 'districtId',
    required: false,
    example: 'OCUmOjai',
  })
  @ApiQuery({
    name: 'provinceId',
    required: false,
    example: 'FDGn6oak',
  })
  @ApiQuery({ name: 'category', required: false, example: 'buffet' })
  @ApiQuery({ name: 'minPrice', required: false, example: 100000 })
  @ApiQuery({ name: 'maxPrice', required: false, example: 1000000 })
  @ApiQuery({ name: 'isAvailable', required: false, example: true })
  @ApiQuery({ name: 'isFeatured', required: false, example: false })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Lấy danh sách nhà hàng thành công',
  })
  async findAll(@Query() filterDto: RestaurantFilterDto) {
    return this.restaurantService.findAll(filterDto);
  }

  @Get('/with-location')
  async findAllWithLocation(): Promise<RestaurantDto[]> {
    const restaurants = await this.restaurantService.findAllWithLocation();
    return restaurants.map((acc) => new RestaurantDto(acc));
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Lấy nhà hàng theo mã ngắn (short ID)' })
  @ApiParam({
    name: 'shortId',
    description: 'Mã ngắn của nhà hàng',
    example: 'AbwmzcwJ',
  })
  @ApiResponse({ status: 200, description: 'Lấy nhà hàng thành công' })
  @ApiResponse({
    status: 404,
    description: 'Không tìm thấy nhà hàng với mã ngắn này',
  })
  async findOne(@Param('shortId') shortId: string): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findByShortId(shortId);
    if (!restaurant) {
      throw new NotFoundException(
        `Restaurant with shortId ${shortId} not found`,
      );
    }
    return restaurant;
  }
}
