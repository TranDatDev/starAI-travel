import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateManagerDto } from './dto/create-manager.dto';
import { nanoid } from 'nanoid';
import * as bcrypt from 'bcrypt';
import {
  ManagerAction,
  TargetType,
  PartnerStatus,
  HttpMethod,
  Role,
} from '../../generated/prisma';
@Injectable()
export class ManagerService {
  constructor(private prisma: PrismaService) {}

  async getAllManagers() {
    return this.prisma.user.findMany({
      where: { role: 'MANAGER' },
      include: {
        profile: true,
      },
    });
  }

  async getManagerById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true,
      },
    });
  }

  async updateManagerById(id: string, data: Partial<CreateManagerDto>) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.user.update({
      where: { id },
      data: {
        email: data.email,
        password: data.password,
        profile:
          data.bio || data.birthday || data.gender || data.location
            ? {
                update: {
                  bio: data.bio,
                  birthday: data.birthday,
                  gender: data.gender,
                  location: data.location,
                },
              }
            : undefined,
      },
      include: {
        profile: true,
      },
    });
  }

  async createManager(dto: CreateManagerDto) {
    const id = nanoid(8);
    const profileId = nanoid(8);
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        id,
        email: dto.email,
        password: hashedPassword,
        role: 'MANAGER',
        profile: {
          create: {
            id: profileId,
            bio: dto.bio ?? '',
            birthday: dto.birthday ?? null,
            gender: dto.gender ?? null,
            location: dto.location ?? '',
          },
        },
      },
      include: {
        profile: true,
      },
    });
  }

  async logManagerAction(params: {
    managerId: string;
    action: ManagerAction;
    targetId?: string;
    targetType?: TargetType;
    description?: string;

    // HTTP Request
    httpMethod?: HttpMethod;
    httpUrl?: string;
    httpQuery?: any;
    httpParams?: any;
    httpBody?: any;
    httpHeaders?: any;
  }) {
    const {
      managerId,
      action,
      targetId,
      targetType,
      description,
      httpMethod,
      httpUrl,
      httpQuery,
      httpParams,
      httpBody,
      httpHeaders,
    } = params;

    return this.prisma.managerHistory.create({
      data: {
        id: nanoid(8),
        managerId,
        action,
        targetId,
        targetType,
        description,

        // HTTP Request
        httpMethod,
        httpUrl,
        httpQuery,
        httpParams,
        httpBody,
        httpHeaders,
      },
    });
  }

  async verifyPartnerRequest(params: {
    managerId: string;
    partnerUserId: string;
    approved: boolean;
    reason?: string;
    httpRequest?: {
      method?: HttpMethod;
      url?: string;
      query?: any;
      params?: any;
      body?: any;
      headers?: any;
    };
  }) {
    const { managerId, partnerUserId, approved, reason, httpRequest } = params;
    const status = approved ? PartnerStatus.APPROVED : PartnerStatus.REJECTED;

    await this.prisma.partnerInfo.update({
      where: { userId: partnerUserId },
      data: {
        status,
        verifiedById: managerId,
      },
    });

    if (approved) {
      await this.prisma.user.update({
        where: { id: partnerUserId },
        data: { role: 'PARTNER' },
      });
    }

    await this.logManagerAction({
      managerId,
      action: ManagerAction.MANAGE_PARTNER,
      targetId: partnerUserId,
      targetType: TargetType.PARTNER,
      description: approved
        ? `Manager ${managerId} approved partner registration${reason ? `: ${reason}` : ''} of user ${partnerUserId}`
        : `Manager ${managerId} rejected partner registration${reason ? `: ${reason}` : ''} of user ${partnerUserId}`,

      // HTTP Info
      httpMethod: httpRequest?.method,
      httpUrl: httpRequest?.url,
      httpQuery: httpRequest?.query,
      httpParams: httpRequest?.params,
      httpBody: httpRequest?.body,
      httpHeaders: httpRequest?.headers,
    });

    return {
      message: approved
        ? 'Partner approved by manager successfully'
        : 'Partner rejected by manager successfully',
    };
  }
}
