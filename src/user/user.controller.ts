import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User as UserModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.userService.create(createUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll(): Promise<UserModel[]> {
    return await this.userService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<string> {
    return await this.userService.update(id, updateUserDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.userService.remove(id);
  }
}
