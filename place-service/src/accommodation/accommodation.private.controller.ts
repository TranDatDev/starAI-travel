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
import { AccommodationService } from './accommodation.service';
import { Accommodation } from './schemas/accommodation.schema';
import { AccommodationFilterDto } from './dto/accommodation-filter.dto';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';
@ApiTags('API nội bộ: Cơ sở lưu trú')
@Controller({ path: '/private/accommodation', version: '1' })
export class AccommodationPrivateController {
  constructor(
    private readonly accommodationService: AccommodationService,
    private readonly supabaseService: SupabaseService,
  ) {}
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
  async findAllByAdmin(@Query() filterDto: AccommodationFilterDto) {
    return this.accommodationService.findAllByAdmin(filterDto);
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
  async remove(
    @Param('id') id: string,
    @Query('type') type: 'soft' | 'hard',
  ): Promise<{ message: string }> {
    await this.accommodationService.remove(id, type);
    return {
      message: `Accommodation with ID ${id} has been deleted (${type})`,
    };
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
    const originalName = file.originalname;
    const baseName = path.basename(originalName, path.extname(originalName));
    const slugName = generateSlug(baseName);
    const fileName = `${shortId}/${Date.now()}-${slugName}.webp`;
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
