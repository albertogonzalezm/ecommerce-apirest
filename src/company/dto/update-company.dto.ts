import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCompanyDto } from './create-company.dto';

import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @ApiProperty({ minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsOptional()
  owner: string;

  @ApiProperty({ minLength: 2, maxLength: 55 })
  @IsString()
  @MinLength(2)
  @MaxLength(55)
  @IsOptional()
  name: string;

  @ApiProperty({ maxLength: 55 })
  @IsString()
  @MaxLength(55)
  @IsEmail()
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
  address: string;
}
