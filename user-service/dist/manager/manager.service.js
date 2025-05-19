"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const nanoid_1 = require("nanoid");
const bcrypt = require("bcrypt");
const prisma_1 = require("../../generated/prisma");
let ManagerService = class ManagerService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllManagers() {
        return this.prisma.user.findMany({
            where: { role: 'MANAGER' },
            include: {
                profile: true,
            },
        });
    }
    async getManagerById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            include: {
                profile: true,
            },
        });
    }
    async updateManagerById(id, data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data: {
                email: data.email,
                password: data.password,
                profile: data.bio || data.birthday || data.gender || data.location
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
    async createManager(dto) {
        const id = (0, nanoid_1.nanoid)(8);
        const profileId = (0, nanoid_1.nanoid)(8);
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
    async logManagerAction(params) {
        const { managerId, action, targetId, targetType, description, httpMethod, httpUrl, httpQuery, httpParams, httpBody, httpHeaders, } = params;
        return this.prisma.managerHistory.create({
            data: {
                id: (0, nanoid_1.nanoid)(8),
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
            },
        });
    }
    async verifyPartnerRequest(params) {
        const { managerId, partnerUserId, approved, reason, httpRequest } = params;
        const status = approved ? prisma_1.PartnerStatus.APPROVED : prisma_1.PartnerStatus.REJECTED;
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
            action: prisma_1.ManagerAction.MANAGE_PARTNER,
            targetId: partnerUserId,
            targetType: prisma_1.TargetType.PARTNER,
            description: approved
                ? `Manager ${managerId} approved partner registration${reason ? `: ${reason}` : ''} of user ${partnerUserId}`
                : `Manager ${managerId} rejected partner registration${reason ? `: ${reason}` : ''} of user ${partnerUserId}`,
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
};
exports.ManagerService = ManagerService;
exports.ManagerService = ManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ManagerService);
//# sourceMappingURL=manager.service.js.map