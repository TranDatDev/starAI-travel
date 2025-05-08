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
import { AttractionService } from './attraction.service';
import { Attraction } from './schemas/attraction.schema';
import { AttractionFilterDto } from './dto/attraction-filter.dto';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
@ApiTags('API nội bộ: Điểm du lịch')
@Controller({ path: '/private/attraction', version: '1' })
export class AttractionPrivateController {
  constructor(
    private readonly attractionService: AttractionService,
    private readonly supabaseService: SupabaseService,
  ) {}

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
  async findAllByAdmin(@Query() filterDto: AttractionFilterDto) {
    return this.attractionService.findAllByAdmin(filterDto);
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
  @ApiOperation({ summary: 'Xoá một địa điểm du lịch theo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID của địa điểm du lịch cần xoá',
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
    await this.attractionService.remove(id, type);
    return {
      message: `Attraction with ID ${id} has been deleted (${type})`,
    };
  }

  @Post(':shortId/upload-image')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload ảnh cho điểm du lịch' })
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
      'attraction-files',
      fileName,
    );

    // Cập nhật URL ảnh vào cơ sở dữ liệu MongoDB
    const updatedAttraction = await this.attractionService.addImageToAttraction(
      shortId,
      imageUrl,
    );

    return {
      message: 'Ảnh đã được upload và lưu thành công',
      imageUrl,
      attraction: updatedAttraction,
    };
  }
}
