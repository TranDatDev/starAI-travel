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
exports.PartnerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const nanoid_1 = require("nanoid");
const supabase_service_1 = require("../supabase/supabase.service");
let PartnerService = class PartnerService {
    prisma;
    supabaseService;
    constructor(prisma, supabaseService) {
        this.prisma = prisma;
        this.supabaseService = supabaseService;
    }
    async uploadPost(userId, file, body) {
        const { title, content, isPublic = true } = body;
        const fileName = `post-${userId}-${Date.now()}-image.jpg`;
        const bucket = 'post-files';
        const imageUrl = await this.supabaseService.processAndUploadImage(file.buffer, bucket, fileName, 90, 1920, 1080, 'jpeg');
        const postId = (0, nanoid_1.nanoid)(8);
        await this.prisma.post.create({
            data: {
                id: postId,
                userId,
                title,
                content,
                imageUrl,
                isPublic,
            },
        });
        return {
            postId: postId,
            imageUrl,
        };
    }
    async getAllPosts() {
        return this.prisma.post.findMany({
            where: { isPublic: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getPostsByPartnerId(userId) {
        return this.prisma.post.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async disablePost(postId) {
        const post = await this.prisma.post.findUnique({
            where: { id: postId },
        });
        if (!post) {
            throw new Error('Post not found');
        }
        await this.prisma.post.update({
            where: { id: postId },
            data: { isPublic: false },
        });
        return { message: 'Post disabled successfully' };
    }
};
exports.PartnerService = PartnerService;
exports.PartnerService = PartnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        supabase_service_1.SupabaseService])
], PartnerService);
//# sourceMappingURL=partner.service.js.map