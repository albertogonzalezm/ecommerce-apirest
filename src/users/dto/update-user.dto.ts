import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsOptional()
  name: string;

  @ApiProperty({
    required: false,
    maxLength: 55,
  })
  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsOptional()
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 255 })
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @IsOptional()
  password: string;

  @ApiProperty({ maxLength: 20 })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
