"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerModule = void 0;
const common_1 = require("@nestjs/common");
const partner_service_1 = require("./partner.service");
const partner_public_controller_1 = require("./partner.public.controller");
const partner_private_controller_1 = require("./partner.private.controller");
const supabase_module_1 = require("../supabase/supabase.module");
const platform_express_1 = require("@nestjs/platform-express");
const prisma_module_1 = require("../prisma/prisma.module");
let PartnerModule = class PartnerModule {
};
exports.PartnerModule = PartnerModule;
exports.PartnerModule = PartnerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                limits: { fileSize: 10 * 1024 * 1024 },
            }),
            prisma_module_1.PrismaModule,
            supabase_module_1.SupabaseModule,
        ],
        controllers: [partner_public_controller_1.PartnerPublicController, partner_private_controller_1.PartnerPrivateController],
        providers: [partner_service_1.PartnerService],
    })
], PartnerModule);
//# sourceMappingURL=partner.module.js.map