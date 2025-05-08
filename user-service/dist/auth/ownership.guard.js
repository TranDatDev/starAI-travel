"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var OwnershipGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnershipGuard = void 0;
const common_1 = require("@nestjs/common");
let OwnershipGuard = OwnershipGuard_1 = class OwnershipGuard {
    logger = new common_1.Logger(OwnershipGuard_1.name);
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const paramId = request.params.id;
        if (user.role === 'ADMIN') {
            this.logger.debug(`User ${user.id} is an ADMIN, access granted.`);
            return true;
        }
        if (user.id !== paramId) {
            this.logger.debug(`User ${user.id} is not the owner of params id ${paramId}.`);
            throw new common_1.ForbiddenException('Access denied: not your resource');
        }
        this.logger.debug(`User ${user.id} is the confirmed owner of params id ${paramId}.`);
        return true;
    }
};
exports.OwnershipGuard = OwnershipGuard;
exports.OwnershipGuard = OwnershipGuard = OwnershipGuard_1 = __decorate([
    (0, common_1.Injectable)()
], OwnershipGuard);
//# sourceMappingURL=ownership.guard.js.map