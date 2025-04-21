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
} from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schema';
import { RestaurantFilterDto } from './dto/restaurant-filter.dto';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('API nội bộ: Nhà hàng')
@Controller({ path: '/private/restaurant', version: '1' })
export class RestaurantPrivateController {
  constructor(private readonly restaurantService: RestaurantService) {}

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
  async findAll(@Query() filterDto: RestaurantFilterDto) {
    return this.restaurantService.findAll(filterDto);
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
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.restaurantService.remove(id);
    return { message: `Restaurant with ID ${id} has been deleted` };
  }
}
