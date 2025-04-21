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
import { AttractionService } from './attraction.service';
import { Attraction } from './schemas/attraction.schema';
import { AttractionFilterDto } from './dto/attraction-filter.dto';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('API nội bộ: Điểm du lịch')
@Controller({ path: '/private/attraction', version: '1' })
export class AttractionPrivateController {
  constructor(private readonly attractionService: AttractionService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo mới một điểm du lịch' })
  @ApiResponse({
    status: 201,
    description: 'Tạo điểm du lịch thành công',
    type: Attraction,
  })
  async create(@Body() data: CreateAttractionDto): Promise<Attraction> {
    return this.attractionService.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách điểm du lịch (kèm bộ lọc)' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách điểm du lịch',
    type: [Attraction],
  })
  async findAll(@Query() filterDto: AttractionFilterDto) {
    return this.attractionService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết một điểm du lịch theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của điểm du lịch',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Chi tiết điểm du lịch',
    type: Attraction,
  })
  async findOne(@Param('id') id: string): Promise<Attraction> {
    const attraction = await this.attractionService.findOne(id);
    if (!attraction) {
      throw new NotFoundException(`Cannot find any attraction with ID ${id}`);
    }
    return attraction;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin điểm du lịch' })
  @ApiParam({
    name: 'id',
    description: 'ID của điểm du lịch cần cập nhật',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Cập nhật thành công',
    type: Attraction,
  })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAttractionDto,
  ): Promise<Attraction> {
    return this.attractionService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xoá một điểm du lịch theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của điểm du lịch cần xoá',
    example: 'bed1a8e3-c25a-4878-9d69-79081180def9',
  })
  @ApiResponse({
    status: 200,
    description: 'Xoá thành công',
  })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.attractionService.remove(id);
    return { message: `Attraction with ID ${id} has been deleted` };
  }
}
