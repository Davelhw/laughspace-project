// libs/user/src/user.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@laughspace/db';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Get('by-email')
  async findByEmail(@Query('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }
}
