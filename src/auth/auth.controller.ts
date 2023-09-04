import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';
import { Response, Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(
    @Body() user: SignInUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.signin(user, res);
  }
}
