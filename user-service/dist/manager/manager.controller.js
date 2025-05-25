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
exports.ManagerController = void 0;
const common_1 = require("@nestjs/common");
const manager_service_1 = require("./manager.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const user_service_1 = require("../user/user.service");
const decorators_1 = require("@nestjs/common/decorators");
const common_2 = require("@nestjs/common");
const prisma_1 = require("../../generated/prisma");
let ManagerController = class ManagerController {
    managerService;
    userService;
    constructor(managerService, userService) {
        this.managerService = managerService;
        this.userService = userService;
    }
    async getAllRequestPartnerFromUserByManager(status, req) {
        this.managerService.logManagerAction({
            managerId: req.user.id,
            action: prisma_1.ManagerAction.MANAGE_PARTNER,
            targetType: 'USER',
            description: `Manager ${req.user.id} is fetching all request partner from all users with status ${status}`,
            httpMethod: req.method,
            httpUrl: req.originalUrl,
            httpQuery: req.query,
            httpParams: req.params,
            httpBody: req.body,
            httpHeaders: req.headers,
        });
        return await this.userService.getAllRequestPartnerFromUserByManager(status);
    }
    async getSpecificRequestPartnerFromUserByManager(userId, req) {
        this.managerService.logManagerAction({
            managerId: req.user.id,
            action: prisma_1.ManagerAction.MANAGE_PARTNER,
            targetId: userId,
            targetType: 'USER',
            description: `Manager ${req.user.id} is fetching request partner from user ${userId}`,
            httpMethod: req.method,
            httpUrl: req.originalUrl,
            httpQuery: req.query,
            httpParams: req.params,
            httpBody: req.body,
            httpHeaders: req.headers,
        });
        return await this.userService.getSpecificRequestPartnerFromUserByManager(userId);
    }
    async verifyPartnerRequest(partnerUserId, body, req) {
        return this.managerService.verifyPartnerRequest({
            managerId: req.user.id,
            partnerUserId: partnerUserId,
            approved: body.approved,
            reason: body.reason,
            httpRequest: {
                method: req.method,
                url: req.originalUrl,
                query: req.query,
                params: req.params,
                body: req.body,
                headers: req.headers,
            },
        });
    }
    async getAllUserByManager(page = 1, limit = 10, req) {
        this.managerService.logManagerAction({
            managerId: req.user.id,
            action: prisma_1.ManagerAction.MANAGE_USER,
            targetType: 'USER',
            description: `Manager ${req.user.id} is fetching all users with page ${page} and limit ${limit}`,
            httpMethod: req.method,
            httpUrl: req.originalUrl,
            httpQuery: req.query,
            httpParams: req.params,
            httpBody: req.body,
            httpHeaders: req.headers,
        });
        return await this.userService.getAllUserByManager(page, limit);
    }
};
exports.ManagerController = ManagerController;
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)(prisma_1.Role.MANAGER, prisma_1.Role.ADMIN),
    (0, decorators_1.Get)('request-partner'),
    __param(0, (0, common_2.Query)('status')),
    __param(1, (0, decorators_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getAllRequestPartnerFromUserByManager", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('MANAGER', 'ADMIN'),
    (0, decorators_1.Get)('/request-partner/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getSpecificRequestPartnerFromUserByManager", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('MANAGER', 'ADMIN'),
    (0, decorators_1.Post)('/request-partner/:id'),
    __param(0, (0, decorators_1.Param)('id')),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, decorators_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "verifyPartnerRequest", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('MANAGER', 'ADMIN'),
    (0, decorators_1.Get)('/user'),
    __param(0, (0, common_2.Query)('page')),
    __param(1, (0, common_2.Query)('limit')),
    __param(2, (0, decorators_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ManagerController.prototype, "getAllUserByManager", null);
exports.ManagerController = ManagerController = __decorate([
    (0, common_1.Controller)({ path: 'private/manager', version: '1' }),
    __metadata("design:paramtypes", [manager_service_1.ManagerService,
        user_service_1.UserService])
], ManagerController);
//# sourceMappingURL=manager.controller.js.map