import { Injectable } from '@nestjs/common';
import { User } from 'src/users/interfaces/user.interface';

// simulazione DB
const users: User[] = [
  {
    userId: 1,
    username: 'Veronica',
    password: 'password12',
  },
  {
    userId: 2,
    username: 'Paolo',
    password: 'password34',
  },
];

@Injectable()
export class UsersService {
  async findUserByName(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
