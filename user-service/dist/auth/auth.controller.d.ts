import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
        superkey?: string;
        adminkey?: string;
    }): Promise<any>;
    register(body: {
        email: string;
        password: string;
    }): Promise<any>;
}
