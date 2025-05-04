// libs/user/src/dto/create-user.dto.ts
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'johndale (minimum of 8 characters)' })
  @IsNotEmpty()
  @MinLength(8)
  username: string;

  @ApiProperty({ example: 'AFjUmxK12!@ (minimum of 8 characters)' })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}







