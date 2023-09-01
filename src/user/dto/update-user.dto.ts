import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @MaxLength(55)
  @IsOptional()
  name: string;

  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsOptional()
  email: string;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  password: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
