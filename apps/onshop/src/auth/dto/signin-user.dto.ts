import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInUserDto {
  @ApiProperty({ example: 'gonza@gmail.com', maxLength: 55 })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'beto123', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  password: string;
}
