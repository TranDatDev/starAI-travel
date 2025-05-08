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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const manager_service_1 = require("../manager/manager.service");
const create_manager_dto_1 = require("../manager/dto/create-manager.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const admin_service_1 = require("./admin.service");
const prisma_1 = require("../../generated/prisma");
let AdminController = class AdminController {
    managerService;
    adminService;
    constructor(managerService, adminService) {
        this.managerService = managerService;
        this.adminService = adminService;
    }
    async createManager(dto, req) {
        const result = await this.managerService.createManager(dto);
        await this.adminService.logAdminAction({
            adminId: req.user.id,
            action: prisma_1.AdminAction.MANAGE_MANAGER,
            targetId: result.id,
            targetType: prisma_1.TargetType.USER,
            description: `Admin tạo tài khoản manager ${result.email}`,
        });
        return result;
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('ADMIN'),
    (0, decorators_1.Post)('create-manager'),
    __param(0, (0, decorators_1.Body)()),
    __param(1, (0, route_params_decorator_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_manager_dto_1.CreateManagerDto, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "createManager", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)({ path: '/private/admin', version: '1' }),
    __metadata("design:paramtypes", [manager_service_1.ManagerService,
        admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map