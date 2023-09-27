import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Jhon Doe', minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'gonza@email.com', maxLength: 55 })
  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'alberto123', minLength: 8, maxLength: 255 })
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: '+573001234567', required: false, maxLength: 20 })
  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
