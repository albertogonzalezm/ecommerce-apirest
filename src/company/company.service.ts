import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Company, Prisma } from '@prisma/client';
import { hash } from 'bcrypt';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CompanyCreateInput): Promise<object> {
    try {
      Object.assign(data, { password: await hash(data.password, 12) });
      await this.prisma.company.create({ data });
      return {
        message: 'Company has been added',
        statusCode: HttpStatus.CREATED,
        status: 'Created',
      };
    } catch (error) {
      throw new ConflictException(error.message);
    }
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.prisma.company.findMany();
    if (!companies) throw new NotFoundException();
    return companies;
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.prisma.company.findUnique({
      where: { company_id: id },
    });
    if (!company) throw new NotFoundException();
    return company;
  }

  async update(id: string, data: Prisma.CompanyUpdateInput): Promise<object> {
    try {
      if (typeof data.password === 'string') {
        Object.assign(data, { password: await hash(data.password, 12) });
      }
      await this.prisma.company.update({ where: { company_id: id }, data });
      return {
        message: `Company with id ${id.substring(24)} has been updated`,
        statusCode: HttpStatus.OK,
        status: 'OK',
      };
    } catch (error) {
      throw new NotFoundException();
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.company.delete({ where: { company_id: id } });
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
