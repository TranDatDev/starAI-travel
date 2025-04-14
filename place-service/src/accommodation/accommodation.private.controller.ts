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
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { AccommodationFilterDto } from './dto/accommodation-filter.dto';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('API nội bộ: Cơ sở lưu trú')
@Controller({ path: '/private/accommodation', version: '1' })
export class AccommodationPrivateController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo mới một cơ sở lưu trú' })
  @ApiResponse({
    status: 201,
    description: 'Tạo cơ sở lưu trú thành công',
    type: Accommodation,
  })
  async create(@Body() data: CreateAccommodationDto): Promise<Accommodation> {
    return this.accommodationService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách cơ sở lưu trú (kèm bộ lọc)' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách cơ sở lưu trú',
    type: [Accommodation],
  })
  async findAll(@Query() filterDto: AccommodationFilterDto) {
    return this.accommodationService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết một cơ sở lưu trú theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của cơ sở lưu trú',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Chi tiết cơ sở lưu trú',
    type: Accommodation,
  })
  async findOne(@Param('id') id: string): Promise<Accommodation> {
    const accommodation = await this.accommodationService.findOne(id);
    if (!accommodation) {
      throw new NotFoundException(
        `Cannot find any accommodation with ID ${id}`,
      );
    }
    return accommodation;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin cơ sở lưu trú' })
  @ApiParam({
    name: 'id',
    description: 'ID của cơ sở lưu trú cần cập nhật',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Cập nhật thành công',
    type: Accommodation,
  })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAccommodationDto,
  ): Promise<Accommodation> {
    return this.accommodationService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xoá một cơ sở lưu trú theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của cơ sở lưu trú cần xoá',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Xoá thành công',
  })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.accommodationService.remove(id);
    return { message: `Accommodation with ID ${id} has been deleted` };
  }
}
