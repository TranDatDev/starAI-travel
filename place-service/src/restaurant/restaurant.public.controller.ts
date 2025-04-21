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

  @Post(':shortId/upload-image')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload ảnh cho nhà hàng' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Tải ảnh lên thành công, trả về URL',
  })
  @ApiResponse({ status: 400, description: 'File không hợp lệ' })
  async uploadImage(
    @Param('shortId') shortId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException('Không có file nào được tải lên');
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.mimetype)) {
      throw new BadRequestException('Định dạng ảnh không hợp lệ');
    }

    // Tạo tên file duy nhất
    const fileName = `${shortId}/${Date.now()}-${file.originalname}`;

    // Upload ảnh và lấy URL
    const imageUrl = await this.supabaseService.processAndUploadImage(
      file.buffer,
      'restaurant-files',
      fileName,
    );

    // Cập nhật URL ảnh vào cơ sở dữ liệu MongoDB
    const updatedRestaurant = await this.restaurantService.addImageToRestaurant(
      shortId,
      imageUrl,
    );

    return {
      message: 'Ảnh đã được upload và lưu thành công',
      imageUrl,
      restaurant: updatedRestaurant,
    };
  }
}
