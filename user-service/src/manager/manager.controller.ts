import { Controller } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/role.decorator';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { UserService } from 'src/user/user.service';
import { Get, Param, Post, Req, Body } from '@nestjs/common/decorators';
import { Query } from '@nestjs/common';
import { Role, ManagerAction, HttpMethod } from '../../generated/prisma';
@Controller({ path: 'private/manager', version: '1' })
export class ManagerController {
  constructor(
    private readonly managerService: ManagerService,
    private readonly userService: UserService,
  ) {}
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.MANAGER, Role.ADMIN)
  @Get('request-partner')
  async getAllRequestPartnerFromUserByManager(
    @Query('status') status: string,
    @Req() req: any,
  ) {
    this.managerService.logManagerAction({
      managerId: req.user.id,
      action: ManagerAction.MANAGE_PARTNER,
      targetType: 'USER',
      description: `Manager ${req.user.id} is fetching all request partner from all users with status ${status}`,
      // HTTP Request
      httpMethod: req.method as HttpMethod,
      httpUrl: req.originalUrl,
      httpQuery: req.query,
      httpParams: req.params,
      httpBody: req.body,
      httpHeaders: req.headers,
    });
    return await this.userService.getAllRequestPartnerFromUserByManager(status);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('MANAGER', 'ADMIN')
  @Get('/request-partner/:id')
  async getSpecificRequestPartnerFromUserByManager(
    @Param('id') userId: string,
    @Req() req: any,
  ) {
    this.managerService.logManagerAction({
      managerId: req.user.id,
      action: ManagerAction.MANAGE_PARTNER,
      targetId: userId,
      targetType: 'USER',
      description: `Manager ${req.user.id} is fetching request partner from user ${userId}`,
      // HTTP Request
      httpMethod: req.method as HttpMethod,
      httpUrl: req.originalUrl,
      httpQuery: req.query,
      httpParams: req.params,
      httpBody: req.body,
      httpHeaders: req.headers,
    });
    return await this.userService.getSpecificRequestPartnerFromUserByManager(
      userId,
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('MANAGER', 'ADMIN')
  @Post('/request-partner/:id')
  async verifyPartnerRequest(
    @Param('id') partnerUserId: string,
    @Body() body: { approved: boolean; reason?: string },
    @Req() req: any,
  ) {
    return this.managerService.verifyPartnerRequest({
      managerId: req.user.id,
      partnerUserId: partnerUserId,
      approved: body.approved,
      reason: body.reason,
      httpRequest: {
        method: req.method as HttpMethod,
        url: req.originalUrl,
        query: req.query,
        params: req.params,
        body: req.body,
        headers: req.headers,
      },
    });
  }
}
