import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
type AuthInput = {
    username: string;
    password: string;
};
type SignInData = {
    userId: number;
    username: string;
};
type AuthResult = {
    accessToken: string;
    userId: number;
    username: string;
};
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    authenticate(input: AuthInput): Promise<AuthResult>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    singIn(user: SignInData): Promise<AuthResult>;
}
export {};
