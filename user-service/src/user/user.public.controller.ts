import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiTags, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { OwnershipGuard } from 'src/auth/ownership.guard';
import { UpdateUserPublicDto } from './dto/update-user.public.dto';
import { RequestPartnerDto } from './dto/request-partner.dto';
@ApiTags('user')
@Controller({ path: '/public/user', version: '1' })
export class UserPublicController {
  private readonly logger = new Logger(UserPublicController.name);

  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('USER')
  @Get(':id')
  @ApiParam({ name: 'id', type: String, description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User found.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  getUserInfoById(@Param('id') id: string) {
    this.logger.log(`User ${id} is fetching their info`);
    return this.userService.getUserInfoById(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('USER')
  @Patch(':id')
  @ApiParam({ name: 'id', type: String, description: 'User ID' })
  @ApiBody({ type: UpdateUserPublicDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  update(@Param('id') id: string, @Body() dto: UpdateUserPublicDto) {
    this.logger.log(`Updating user ${id}`);
    return this.userService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
  @Roles('USER')
  @Post(':id/request-partner')
  @ApiParam({ name: 'id', type: String, description: 'User ID' })
  @ApiBody({
    type: RequestPartnerDto,
    description: 'Request partner role details',
  })
  @ApiResponse({
    status: 200,
    description: 'Partner role requested successfully.',
  })
  @ApiResponse({ status: 400, description: 'Invalid request data.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async requestPartner(
    @Param('id') userId: string,
    @Body() dto: RequestPartnerDto,
  ) {
    return this.userService.requestPartnerRole(
      userId,
      dto.organization,
      dto.licenseNumber,
    );
  }
}
