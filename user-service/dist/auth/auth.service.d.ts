import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userService;
    private jwtService;
    private config;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService, config: ConfigService);
    validateUser(email: string, password: string, superkey?: string, adminkey?: string): Promise<{
        id: string;
        email: string;
        role: import("generated/prisma").$Enums.Role;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    register(data: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
