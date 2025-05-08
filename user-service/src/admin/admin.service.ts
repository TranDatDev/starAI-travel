// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdminAction, TargetType } from '../../generated/prisma';
import { nanoid } from 'nanoid';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async logAdminAction(params: {
    adminId: string;
    action: AdminAction;
    targetId?: string;
    targetType?: TargetType;
    description?: string;
  }) {
    const { adminId, action, targetId, targetType, description } = params;

    return this.prisma.adminHistory.create({
      data: {
        id: nanoid(8),
        adminId,
        action,
        targetId,
        targetType,
        description,
      },
    });
  }
}
