import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { compare } from 'bcrypt';
import { SignInUserDto } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signin({ email, password }: SignInUserDto, res: Response) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!(await compare(password, user?.password))) {
      throw new UnauthorizedException();
    }
    const access_token = await this.jwtService.signAsync({
      sub: user.user_id,
      role: user.role,
    });
    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 60000),
    };
    res.cookie('onshop_access_token', access_token, cookieOptions);
    return { user, access_token };
  }
}
