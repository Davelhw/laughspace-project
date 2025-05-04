// libs/auth/src/dto/login.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'johndale' })
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'AFjUmxK12!@ (minimum of 8 characters)' })
  @IsNotEmpty()
  password: string;
}


