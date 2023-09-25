import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInUserDto {
  @ApiProperty({ example: 'gonza@email.com', maxLength: 55 })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'alberto123', maxLength: 255 })
  @IsString()
  @IsNotEmpty()
  password: string;
}
