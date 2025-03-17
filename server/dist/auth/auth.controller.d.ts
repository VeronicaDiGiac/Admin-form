import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(input: {
        username: string;
        password: string;
    }): Promise<import("./interfaces/auth.interfaces").AuthResult>;
    getUserInfo(request: any): any;
}
