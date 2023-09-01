import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<string> {
    Object.assign(data, { password: await hash(data.password, 12) });
    await this.prisma.user.create({ data });
    return `User has been created`;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { user_id: id } });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<string> {
    await this.prisma.user.update({ where: { user_id: id }, data });
    return `User with id ${id} has been updated`;
  }

  async remove(id: string): Promise<string> {
    await this.prisma.user.delete({ where: { user_id: id } });
    return `User with id ${id} has been deleted`;
  }
}
