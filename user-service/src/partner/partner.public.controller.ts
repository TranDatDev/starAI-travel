import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import {
  Query,
  Req,
} from '@nestjs/common/decorators/http/route-params.decorator';
import { PartnerService } from './partner.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { OwnershipGuard } from 'src/auth/ownership.guard';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller({ path: '/public/partner', version: '1' })
export class PartnerPublicController {
  constructor(private readonly partnerService: PartnerService) {}

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('PARTNER')
  @UseInterceptors(FileInterceptor('image'))
  @Post(':id/upload-post')
  async uploadPost(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { title: string; content: string; isPublic?: boolean },
    @Req() req: any,
  ) {
    return this.partnerService.uploadPost(id, file, body);
  }

  @Get('post')
  async getAllPosts() {
    return this.partnerService.getAllPosts();
  }

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('PARTNER')
  @Get(':id/post')
  async getPostsByPartnerId(@Param('id') id: string) {
    return this.partnerService.getPostsByPartnerId(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('PARTNER')
  @Patch(':id/post/:postId')
  async disablePost(@Param('postId') postId: string) {
    return this.partnerService.disablePost(postId);
  }
}
