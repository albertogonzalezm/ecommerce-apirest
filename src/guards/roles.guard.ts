import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { verify } from 'jsonwebtoken';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;

    const request = context.switchToHttp().getRequest();

    const cookie_access_token = request.headers['cookie'];
    if (!cookie_access_token) throw new UnauthorizedException();

    const token = cookie_access_token.split('=');

    const user = verify(token[1], process.env.JWT_SECRET_KEY);

    if (typeof user === 'object' && !roles.includes(user?.role))
      throw new ForbiddenException();

    return true;
  }
}
