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
import { ApiOkResponse } from '@nestjs/swagger';
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { AccommodationFilterDto } from './dto/accommodation-filter.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { AccommodationDto } from './dto/accommodation.dto';

@ApiTags('API công cộng: Cơ sở lưu trú')
@Controller({ path: '/public/accommodation', version: '1' })
export class AccommodationPublicController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách các cơ sở lưu trú' })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Tên cơ sở lưu trú',
    example: 'Nhà nghỉ Bình Minh',
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
  @ApiQuery({ name: 'category', required: false, example: 'hotel' })
  @ApiQuery({ name: 'minPrice', required: false, example: 100000 })
  @ApiQuery({ name: 'maxPrice', required: false, example: 1000000 })
  @ApiQuery({ name: 'isAvailable', required: false, example: true })
  @ApiQuery({ name: 'isFeatured', required: false, example: false })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'limit', required: false, example: 10 })
  @ApiResponse({
    status: 200,
    description: 'Lấy danh sách cơ sở lưu trú thành công',
  })
  async findAll(@Query() filterDto: AccommodationFilterDto) {
    return this.accommodationService.findAll(filterDto);
  }

  @Get('/with-location')
  @ApiOperation({ summary: 'Lấy danh sách cơ sở lưu trú kèm địa chỉ đầy đủ' })
  @ApiOkResponse({
    description: 'Danh sách cơ sở lưu trú đầy đủ location',
    type: [AccommodationDto],
  })
  async findAllWithLocation(): Promise<AccommodationDto[]> {
    const accommodations =
      await this.accommodationService.findAllWithLocation();
    return accommodations.map((acc) => new AccommodationDto(acc));
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Lấy cơ sở lưu trú theo mã ngắn (short ID)' })
  @ApiParam({
    name: 'shortId',
    description: 'Mã ngắn của cơ sở lưu trú',
    example: 'AbwmzcwJ',
  })
  @ApiResponse({ status: 200, description: 'Lấy cơ sở lưu trú thành công' })
  @ApiResponse({
    status: 404,
    description: 'Không tìm thấy cơ sở lưu trú với mã ngắn này',
  })
  async findOne(@Param('shortId') shortId: string): Promise<Accommodation> {
    const accommodation =
      await this.accommodationService.findByShortId(shortId);
    if (!accommodation) {
      throw new NotFoundException(
        `Accommodation with shortId ${shortId} not found`,
      );
    }
    return accommodation;
  }
}
