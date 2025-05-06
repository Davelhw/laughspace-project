import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('ping')
export class PingController {
  @Get()
  getPing(): string {
    return 'pong from frontend 👋';
  }
}

