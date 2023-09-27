import {
  ConflictException,
  Injectable,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<object> {
    try {
      Object.assign(data, { password: await hash(data.password, 12) });
      await this.prisma.user.create({ data });
      return {
        message: 'User has been added',
        statusCode: HttpStatus.CREATED,
        status: 'Created',
      };
    } catch (error) {
      throw new ConflictException(error.message);
    }
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
        statusCode: HttpStatus.OK,
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
