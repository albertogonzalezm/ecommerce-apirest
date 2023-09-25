import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import { compare } from 'bcrypt';
import { SignInUserDto } from './dto/signin-user.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signin({ email, password }: SignInUserDto, res: Response) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException('Email is not registered');
    }

    if (!(await compare(password, user.password)))
      throw new BadRequestException('Password is incorrect');

    const access_token = await this.jwtService.signAsync({
      sub: user.user_id,
      role: user.role,
    });

    res.cookie('access_token', access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 2 * 60 * 1000),
      sameSite: 'strict',
    });

    return { access_token };
  }
}
