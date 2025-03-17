import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput, SignInData, AuthResult } from './interfaces/auth.interfaces';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    authenticate(input: AuthInput): Promise<AuthResult>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    singIn(user: SignInData): Promise<AuthResult>;
}
