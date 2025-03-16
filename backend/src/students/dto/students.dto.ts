import { IsString, IsEmail } from 'class-validator';

export class RequestStudentDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsEmail()
  email: string;

  @IsString()
  className: string;
}
