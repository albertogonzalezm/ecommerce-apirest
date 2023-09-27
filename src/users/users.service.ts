import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<string> {
    try {
      Object.assign(data, { password: await hash(data.password, 12) });
      await this.prisma.user.create({ data });
      return `User has been created`;
    } catch (error) {
      throw new ConflictException();
    }
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { user_id: id } });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: string, data: any): Promise<string> {
    try {
      if (data.password) {
        Object.assign(data, { password: await hash(data.password, 12) });
      }
      await this.prisma.user.update({ where: { user_id: id }, data });
      return `User with id ${id.substring(24)} has been updated`;
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
