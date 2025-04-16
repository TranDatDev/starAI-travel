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
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { AccommodationFilterDto } from './dto/accommodation-filter.dto';
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

@ApiTags('API công cộng: Cơ sở lưu trú')
@Controller({ path: '/public/accommodation', version: '1' })
export class AccommodationPublicController {
  constructor(
    private readonly accommodationService: AccommodationService,
    private readonly supabaseService: SupabaseService,
  ) {}

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
    example: 'd02646dd-df7e-49f6-aa65-c6139ba546ec',
  })
  @ApiQuery({
    name: 'districtId',
    required: false,
    example: '1a142359-6b7f-4019-a9f7-d012787c1353',
  })
  @ApiQuery({
    name: 'provinceId',
    required: false,
    example: '58ae654c-5b2c-4fbd-b83b-c9680a0b71e7',
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

  @Post(':shortId/upload-image')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload ảnh cho cơ sở lưu trú' })
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
      'accommodation-files',
      fileName,
    );

    // Cập nhật URL ảnh vào cơ sở dữ liệu MongoDB
    const updatedAccommodation =
      await this.accommodationService.addImageToAccommodation(
        shortId,
        imageUrl,
      );

    return {
      message: 'Ảnh đã được upload và lưu thành công',
      imageUrl,
      accommodation: updatedAccommodation,
    };
  }
}
