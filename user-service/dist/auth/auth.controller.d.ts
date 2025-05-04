import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
        superkey?: string;
        adminkey?: string;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
