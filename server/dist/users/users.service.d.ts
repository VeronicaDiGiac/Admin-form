import { User } from 'src/users/interfaces/user.interface';
export declare class UsersService {
    findUserByName(username: string): Promise<User | undefined>;
}
