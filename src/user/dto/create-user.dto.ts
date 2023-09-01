import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(55)
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @MaxLength(55)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  password: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  phone_number: string;
}
