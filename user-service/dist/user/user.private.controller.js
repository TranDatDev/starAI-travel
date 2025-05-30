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
var UserPrivateController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPrivateController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const use_guards_decorator_1 = require("@nestjs/common/decorators/core/use-guards.decorator");
const role_guard_1 = require("../auth/role.guard");
const role_decorator_1 = require("../auth/role.decorator");
let UserPrivateController = UserPrivateController_1 = class UserPrivateController {
    userService;
    logger = new common_1.Logger(UserPrivateController_1.name);
    constructor(userService) {
        this.userService = userService;
    }
    create(dto) {
        this.logger.log(`Creating user with email: ${dto.email}`);
        return this.userService.create(dto);
    }
    findAll() {
        this.logger.log('Fetching all users');
        return this.userService.findAll();
    }
    findOne(id) {
        this.logger.log(`Fetching user with ID: ${id}`);
        return this.userService.findOne(id);
    }
    update(id, dto) {
        this.logger.log(`Updating user ${id}`);
        return this.userService.update(id, dto);
    }
    remove(id) {
        this.logger.warn(`Deleting user ${id}`);
        return this.userService.remove(id);
    }
};
exports.UserPrivateController = UserPrivateController;
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('MANAGER', 'ADMIN'),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'User created successfully.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserPrivateController.prototype, "create", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_decorator_1.Roles)('MANAGER', 'ADMIN'),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all users.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrivateController.prototype, "findAll", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPrivateController.prototype, "findOne", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User updated successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserPrivateController.prototype, "update", null);
__decorate([
    (0, use_guards_decorator_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserPrivateController.prototype, "remove", null);
exports.UserPrivateController = UserPrivateController = UserPrivateController_1 = __decorate([
    (0, swagger_1.ApiTags)('user'),
    (0, common_1.Controller)({ path: '/user', version: '1' }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserPrivateController);
//# sourceMappingURL=user.private.controller.js.map