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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerPublicController = void 0;
const common_1 = require("@nestjs/common");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const partner_service_1 = require("./partner.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const ownership_guard_1 = require("../auth/ownership.guard");
const platform_express_1 = require("@nestjs/platform-express");
let PartnerPublicController = class PartnerPublicController {
    partnerService;
    constructor(partnerService) {
        this.partnerService = partnerService;
    }
    async uploadPost(id, file, body, req) {
        return this.partnerService.uploadPost(id, file, body);
    }
    async getAllPosts() {
        return this.partnerService.getAllPosts();
    }
    async getPostsByPartnerId(id) {
        return this.partnerService.getPostsByPartnerId(id);
    }
    async disablePost(postId) {
        return this.partnerService.disablePost(postId);
    }
};
exports.PartnerPublicController = PartnerPublicController;
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('PARTNER'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)(':id/upload-post'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, route_params_decorator_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PartnerPublicController.prototype, "uploadPost", null);
__decorate([
    (0, common_1.Get)('post'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PartnerPublicController.prototype, "getAllPosts", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('PARTNER'),
    (0, common_1.Get)(':id/post'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnerPublicController.prototype, "getPostsByPartnerId", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('PARTNER'),
    (0, common_1.Patch)(':id/post/:postId'),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PartnerPublicController.prototype, "disablePost", null);
exports.PartnerPublicController = PartnerPublicController = __decorate([
    (0, common_1.Controller)({ path: '/public/partner', version: '1' }),
    __metadata("design:paramtypes", [partner_service_1.PartnerService])
], PartnerPublicController);
//# sourceMappingURL=partner.public.controller.js.map