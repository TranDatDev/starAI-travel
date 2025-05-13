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
var UserPublicController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPublicController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const ownership_guard_1 = require("../auth/ownership.guard");
const update_user_public_dto_1 = require("./dto/update-user.public.dto");
const request_partner_dto_1 = require("./dto/request-partner.dto");
const platform_express_1 = require("@nestjs/platform-express");
let UserPublicController = UserPublicController_1 = class UserPublicController {
    userService;
    logger = new common_1.Logger(UserPublicController_1.name);
    constructor(userService) {
        this.userService = userService;
    }
    getUserInfoById(id) {
        this.logger.log(`User ${id} is fetching their info`);
        return this.userService.getUserInfoById(id);
    }
    update(id, dto) {
        this.logger.log(`Updating user ${id}`);
        return this.userService.update(id, dto);
    }
    updateTheme(id, theme) {
        this.logger.log(`Updating theme for user ${id} to ${theme}`);
        return this.userService.updateTheme(id, theme);
    }
    updateLanguage(id, language) {
        this.logger.log(`Updating language for user ${id} to ${language}`);
        return this.userService.updateLanguage(id, language);
    }
    async uploadAvatar(id, file) {
        if (!file) {
            throw new common_1.BadRequestException('File is missing or invalid');
        }
        try {
            const avatarUrl = await this.userService.updateAvatar(id, file);
            return { avatarUrl };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Failed to upload avatar');
        }
    }
    async getUserAvatarById(id) {
        this.logger.log(`User ${id} is fetching their avatar`);
        const avatarUrl = await this.userService.getUserAvatarById(id);
        if (!avatarUrl) {
            throw new common_1.BadRequestException('Avatar not found');
        }
        return { avatarUrl };
    }
    async requestPartner(userId, dto) {
        return this.userService.requestPartnerRole(userId, dto.organization, dto.licenseNumber);
    }
};
exports.UserPublicController = UserPublicController;
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "getUserInfoById", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiBody)({ type: update_user_public_dto_1.UpdateUserPublicDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_public_dto_1.UpdateUserPublicDto]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "update", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Patch)(':id/theme'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Query)('update')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "updateTheme", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Patch)(':id/language'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, route_params_decorator_1.Query)('update')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserPublicController.prototype, "updateLanguage", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Patch)(':id/avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Avatar uploaded successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid file or size exceeded.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "uploadAvatar", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER', 'PARTNER'),
    (0, common_1.Get)(':id/avatar'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "getUserAvatarById", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard, ownership_guard_1.OwnershipGuard),
    (0, role_decorator_1.Roles)('USER'),
    (0, common_1.Post)(':id/request-partner'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiBody)({
        type: request_partner_dto_1.RequestPartnerDto,
        description: 'Request partner role details',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Partner role requested successfully.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid request data.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, request_partner_dto_1.RequestPartnerDto]),
    __metadata("design:returntype", Promise)
], UserPublicController.prototype, "requestPartner", null);
exports.UserPublicController = UserPublicController = UserPublicController_1 = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)({ path: '/public/user', version: '1' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserPublicController);
//# sourceMappingURL=user.public.controller.js.map