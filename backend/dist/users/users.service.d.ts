import { User } from 'src/Models/user.model';
export declare class UsersService {
    findUserByName(username: string): Promise<User | undefined>;
}
