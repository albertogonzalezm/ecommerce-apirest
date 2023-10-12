import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @Inject('USERS_SERVICE') private client: ClientProxy,
  ) {}

  async create(data: Prisma.UserCreateInput): Promise<object> {
    const res = await lastValueFrom(this.client.send('new_user', data));
    if (res.statusCode === 409) throw new ConflictException(res.message);
    return res;
  }

  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    if (!users) throw new NotFoundException();
    return users;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { user_id: id } });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<object> {
    try {
      if (typeof data.password === 'string') {
        Object.assign(data, { password: await hash(data.password, 12) });
      }
      await this.prisma.user.update({ where: { user_id: id }, data });
      return {
        message: `User with id ${id.substring(24)} has been updated`,
        statusCode: 200,
        status: 'OK',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({ where: { user_id: id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
