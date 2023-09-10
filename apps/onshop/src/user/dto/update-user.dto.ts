import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'Jhon Doe', required: false, maxLength: 55 })
  @IsString()
  @MaxLength(55)
  @IsOptional()
  name: string;

  @ApiProperty({
    example: 'jhon1doe@email.com',
    required: false,
    maxLength: 55,
  })
  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsOptional()
  email: string;

  @ApiProperty({ example: 'Jhon123', required: false, maxLength: 255 })
  @IsString()
  @MaxLength(255)
  @IsOptional()
  password: string;

  @ApiProperty({ example: '+573001234567', required: false, maxLength: 20 })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
