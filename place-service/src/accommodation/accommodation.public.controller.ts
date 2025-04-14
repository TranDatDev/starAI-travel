import {
  Controller,
  Get,
  Query,
  Param,
  NotFoundException,
} from '@nestjs/common';
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

@ApiTags('API công cộng: Cơ sở lưu trú')
@Controller({ path: '/public/accommodation', version: '1' })
export class AccommodationPublicController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách các cơ sở lưu trú' })
  @ApiQuery({
    name: 'name',
    required: false,
    description: 'Tên cơ sở lưu trú để tìm kiếm',
    example: 'Nhà nghỉ Bình Minh',
  })
  @ApiQuery({
    name: 'communeId',
    required: false,
    description: 'ID xã để lọc các cơ sở lưu trú',
    example: 'd02646dd-df7e-49f6-aa65-c6139ba546ec',
  })
  @ApiQuery({
    name: 'districtId',
    required: false,
    description: 'ID huyện để lọc các cơ sở lưu trú',
    example: '1a142359-6b7f-4019-a9f7-d012787c1353',
  })
  @ApiQuery({
    name: 'provinceId',
    required: false,
    description: 'ID tỉnh để lọc các cơ sở lưu trú',
    example: '58ae654c-5b2c-4fbd-b83b-c9680a0b71e7',
  })
  @ApiQuery({
    name: 'category',
    required: false,
    description: 'Danh mục cơ sở lưu trú để lọc theo',
    example: 'hotel',
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
    description: 'Giá thấp nhất để lọc các cơ sở lưu trú',
    example: 100000,
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
    description: 'Giá cao nhất để lọc các cơ sở lưu trú',
    example: 1000000,
  })
  @ApiQuery({
    name: 'isAvailable',
    required: false,
    description: 'Lọc theo trạng thái có sẵn hay không',
    example: true,
  })
  @ApiQuery({
    name: 'isFeatured',
    required: false,
    description: 'Lọc theo trạng thái nổi bật',
    example: false,
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Số trang để phân trang',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Số lượng cơ sở lưu trú trên mỗi trang',
    example: 10,
  })
  @ApiResponse({
    status: 200,
    description: 'Lấy danh sách cơ sở lưu trú thành công',
  })
  async findAll(@Query() filterDto: AccommodationFilterDto) {
    return this.accommodationService.findAll(filterDto);
  }

  @Get(':shortId')
  @ApiOperation({ summary: 'Lấy cơ sở lưu trú theo mã ngắn (short ID)' })
  @ApiParam({
    name: 'shortId',
    description: 'Mã ngắn của cơ sở lưu trú cần lấy, nanoid(8)',
    example: 'AbwmzcwJ',
  })
  @ApiResponse({
    status: 200,
    description: 'Lấy cơ sở lưu trú thành công',
  })
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
