import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ManagerService } from '../manager/manager.service';
import { CreateManagerDto } from '../manager/dto/create-manager.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { AdminService } from './admin.service';
import { AdminAction, TargetType } from '../../generated/prisma';
@Controller({ path: '/private/admin', version: '1' })
export class AdminController {
  constructor(
    private readonly managerService: ManagerService,
    private readonly adminService: AdminService,
  ) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('create-manager')
  async createManager(@Body() dto: CreateManagerDto, @Req() req: any) {
    const result = await this.managerService.createManager(dto);

    await this.adminService.logAdminAction({
      adminId: req.user.id,
      action: AdminAction.MANAGE_MANAGER,
      targetId: result.id,
      targetType: TargetType.USER,
      description: `Admin tạo tài khoản manager ${result.email}`,
    });

    return result;
  }
}
