import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @ApiProperty({ minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsNotEmpty()
  owner: string;

  @ApiProperty({ minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ maxLength: 55 })
  @IsString()
  @MaxLength(55)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 255 })
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @IsNotEmpty()
  password: string;

  @ApiProperty({ maxLength: 20 })
  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  address: string;
}
