import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jhon Doe', maxLength: 55 })
  @IsString()
  @MaxLength(55)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'jhon1doe@email.com', maxLength: 55 })
  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Jhon123', maxLength: 255 })
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '+573001234567', required: false, maxLength: 20 })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
