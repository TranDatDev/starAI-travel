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
import { AttractionService } from './attraction.service';
import { Attraction } from './schemas/attraction.schema';
import { AttractionFilterDto } from './dto/attraction-filter.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { AttractionDto } from './dto/attraction.dto';

@ApiTags('API công cộng: Điểm du lịch')
@Controller({ path: '/public/attraction', version: '1' })
export class AttractionPublicController {
  constructor(private readonly attractionService: AttractionService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách các điểm du lịch' })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Tên điểm du lịch',
    example: 'Điểm du lịch Bình Minh',
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
    description: 'Lấy danh sách điểm du lịch thành công',
    type: [AttractionFilterDto],
  })
  async findAll(@Query() filterDto: AttractionFilterDto) {
    return this.attractionService.findAll(filterDto);
  }

  @Get('/with-location')
  async findAllWithLocation(): Promise<AttractionDto[]> {
    const attractions = await this.attractionService.findAllWithLocation();
    return attractions.map((acc) => new AttractionDto(acc));
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Lấy điểm du lịch theo mã ngắn (short ID)' })
  @ApiParam({
    name: 'shortId',
    description: 'Mã ngắn của điểm du lịch',
    example: 'AbwmzcwJ',
  })
  @ApiResponse({ status: 200, description: 'Lấy điểm du lịch thành công' })
  @ApiResponse({
    status: 404,
    description: 'Không tìm thấy điểm du lịch với mã ngắn này',
  })
  async findOne(@Param('shortId') shortId: string): Promise<Attraction> {
    const attraction = await this.attractionService.findByShortId(shortId);
    if (!attraction) {
      throw new NotFoundException(
        `Attraction with shortId ${shortId} not found`,
      );
    }
    return attraction;
  }
}
