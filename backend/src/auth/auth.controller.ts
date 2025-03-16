import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Get,
  Body,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guards/auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() input: { username: string; password: string }) {
    try {
      return await this.authService.authenticate(input);
    } catch (error) {
      throw new UnauthorizedException('Invalid data');
    }
  }

  // Uso delle guards che assicura la validita' del token
  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }
}
