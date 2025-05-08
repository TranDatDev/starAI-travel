import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  NotFoundException,
  Query,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { SupabaseService } from '../supabase/supabase.service';
import { generateSlug } from 'src/utils/slug.util';
import * as path from 'path';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schema';
import { RestaurantFilterDto } from './dto/restaurant-filter.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
@ApiTags('API nội bộ: Nhà hàng')
@Controller({ path: '/private/restaurant', version: '1' })
export class RestaurantPrivateController {
  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly supabaseService: SupabaseService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Tạo mới một nhà hàng' })
  @ApiResponse({
    status: 201,
    description: 'Tạo nhà hàng thành công',
    type: Restaurant,
  })
  async create(@Body() data: CreateRestaurantDto): Promise<Restaurant> {
    return this.restaurantService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách nhà hàng (kèm bộ lọc)' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách nhà hàng',
    type: [Restaurant],
  })
  async findAllByAdmin(@Query() filterDto: RestaurantFilterDto) {
    return this.restaurantService.findAllByAdmin(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết một nhà hàng theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của nhà hàng',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Chi tiết nhà hàng',
    type: Restaurant,
  })
  async findOne(@Param('id') id: string): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOne(id);
    if (!restaurant) {
      throw new NotFoundException(`Cannot find any restaurant with ID ${id}`);
    }
    return restaurant;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin nhà hàng' })
  @ApiParam({
    name: 'id',
    description: 'ID của nhà hàng cần cập nhật',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Cập nhật thành công',
    type: Restaurant,
  })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xoá một nhà hàng theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của nhà hàng cần xoá',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Xoá thành công',
  })
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Query('type') type: 'soft' | 'hard',
  ): Promise<{ message: string }> {
    await this.restaurantService.remove(id, type);
    return {
      message: `Restaurant with ID ${id} has been deleted (${type})`,
    };
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
    const originalName = file.originalname;
    const baseName = path.basename(originalName, path.extname(originalName));
    const slugName = generateSlug(baseName);
    const fileName = `${shortId}/${Date.now()}-${slugName}.webp`;
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
