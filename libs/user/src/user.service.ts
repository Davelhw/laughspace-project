// libs/user/src/user.service.ts
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@laughspace/db';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(userData: Partial<User>): Promise<User> {
    const existingEmail = await this.userModel.findOne({
      email: userData.email,
    });
    if (existingEmail) {
      throw new ConflictException('Email already in use');
    }

    const existingUsername = await this.userModel.findOne({
      username: userData.username,
    });
    if (existingUsername) {
      throw new ConflictException('Username already in use');
    }

    if (!userData.password) {
      throw new ConflictException('Password is required');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    return this.userModel.create(userData);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
