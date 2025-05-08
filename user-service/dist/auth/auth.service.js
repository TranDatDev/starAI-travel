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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
let AuthService = AuthService_1 = class AuthService {
    userService;
    jwtService;
    config;
    logger = new common_1.Logger(AuthService_1.name);
    constructor(userService, jwtService, config) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.config = config;
    }
    async validateUser(email, password, superkey, adminkey) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            this.logger.warn(`Email not found: ${email}`);
            throw new common_1.UnauthorizedException('Email does not exist');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            this.logger.warn(`Incorrect password for email: ${email}`);
            throw new common_1.UnauthorizedException('Invalid password');
        }
        if (user.role === 'MANAGER') {
            const superKeyConfig = this.config.get('SUPER_KEY');
            this.logger.debug('Attempt to login as ADMIN');
            if (superkey !== superKeyConfig) {
                this.logger.warn(`Invalid superkey for MANAGER: ${email}`);
                throw new common_1.UnauthorizedException('Invalid superkey');
            }
        }
        if (user.role === 'ADMIN') {
            const superKeyConfig = this.config.get('SUPER_KEY');
            const adminKeyConfig = this.config.get('ADMIN_KEY');
            this.logger.debug('Attempt to login as ADMIN');
            if (superkey !== superKeyConfig) {
                this.logger.warn(`Invalid super key for ADMIN: ${email}`);
                throw new common_1.UnauthorizedException('Invalid super key');
            }
            if (adminkey !== adminKeyConfig) {
                this.logger.warn(`Invalid admin key for ADMIN: ${email}`);
                throw new common_1.UnauthorizedException('Invalid admin key');
            }
        }
        const { password: _, ...result } = user;
        this.logger.log(`User authenticated successfully: ${email} (role: ${user.role})`);
        return result;
    }
    async login(user) {
        const payload = { sub: user.id, email: user.email, role: user.role };
        return {
            access_token: this.jwtService.sign(payload),
            id: user.id,
        };
    }
    async register(data) {
        const existing = await this.userService.findByEmail(data.email);
        if (existing) {
            this.logger.warn(`Email already exists: ${data.email}`);
            throw new common_1.UnauthorizedException('Email already exists');
        }
        const user = await this.userService.create(data);
        this.logger.log(`New user registered: ${data.email}`);
        return this.login(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map