import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const bearerToken = request.headers['authorization'];
    if (!bearerToken) throw new UnauthorizedException();

    const token = bearerToken.split(' ');
    if (token[0] !== 'Bearer') throw new UnauthorizedException();

    const user = verify(token[1], process.env.JWT_SECRET_KEY);
    if (typeof user === 'object' && user?.role !== 'ADMIN')
      throw new ForbiddenException();

    return true;
  }
}
