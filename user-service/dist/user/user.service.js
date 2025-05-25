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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const nanoid_1 = require("nanoid");
const bcrypt = require("bcrypt");
const exceptions_1 = require("@nestjs/common/exceptions");
const supabase_service_1 = require("../supabase/supabase.service");
let UserService = class UserService {
    prisma;
    supabaseService;
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
    }
    async create(createUserDto) {
        const id = (0, nanoid_1.nanoid)(8);
        const profileId = (0, nanoid_1.nanoid)(8);
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        return this.prisma.user.create({
            data: {
                id,
                email: createUserDto.email,
                password: hashedPassword,
                profile: {
                    create: {
                        id: profileId,
                        bio: '',
                        birthday: null,
                        gender: '',
                        location: '',
                    },
                },
            },
            include: {
                profile: true,
            },
        });
    }
    findAll() {
        return this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
            },
        });
    }
    getUserInfoById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                name: true,
                email: true,
                phoneNumber: true,
                avatar: true,
                language: true,
                theme: true,
                profile: true,
            },
        });
    }
    async update(id, dto) {
        let data = { ...dto };
        if (dto.password) {
            data.password = await bcrypt.hash(dto.password, 10);
        }
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.user.delete({ where: { id } });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                password: true,
                role: true,
                theme: true,
                language: true,
            },
        });
    }
    async getAllRequestPartnerFromUserByManager(status) {
        return this.prisma.partnerInfo.findMany({
            where: { status: status },
            select: {
                id: true,
                userId: true,
                organization: true,
                licenseNumber: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async getSpecificRequestPartnerFromUserByManager(userId) {
        return this.prisma.partnerInfo.findMany({
            where: { userId },
            select: {
                id: true,
                userId: true,
                organization: true,
                licenseNumber: true,
                status: true,
                createdAt: true,
                updatedAt: true,
            },
        });
    }
    async requestPartnerRole(userId, organization, licenseNumber) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { partnerInfo: true },
        });
        if (!user)
            throw new Error('User not found');
        if (user.role !== 'USER')
            throw new exceptions_1.HttpException('Only regular users can request partner role', 403);
        if (user.partnerInfo)
            throw new exceptions_1.BadRequestException('You have already requested partner role');
        await this.prisma.partnerInfo.create({
            data: {
                id: (0, nanoid_1.nanoid)(8),
                userId,
                organization,
                licenseNumber,
                status: 'PENDING',
            },
        });
        return { message: 'Partner request submitted' };
    }
    async updateAvatar(userId, file) {
        const fileName = `user-${userId}-${Date.now()}-avatar.webp`;
        const bucket = 'user-files';
        const avatarUrl = await this.supabaseService.processAndUploadImage(file.buffer, bucket, fileName, 70, 300, 300, 'webp');
        await this.prisma.user.update({
            where: { id: userId },
            data: { avatar: avatarUrl },
        });
        return { avatarUrl };
    }
    async getUserAvatarById(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: { avatar: true },
        });
        return user?.avatar || null;
    }
    async updateTheme(id, theme) {
        return this.prisma.user.update({
            where: { id },
            data: { theme },
            select: { theme: true },
        });
    }
    async updateLanguage(id, language) {
        return this.prisma.user.update({
            where: { id },
            data: { language },
            select: { language: true },
        });
    }
    async getAllUserByManager(page, limit) {
        const skip = (page - 1) * limit;
        const [data, total] = await Promise.all([
            this.prisma.user.findMany({
                skip,
                take: limit,
                where: {
                    role: 'USER',
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    createdAt: true,
                    updatedAt: true,
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({
                where: { role: 'USER' },
            }),
        ]);
        return { data, total };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map