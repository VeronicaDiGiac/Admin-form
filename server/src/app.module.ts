import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { StudentsController } from './students/students.controller';
import { StudetsModule } from './students/students.module';

@Module({
  imports: [UsersModule, AuthModule, StudetsModule],
  controllers: [AppController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
