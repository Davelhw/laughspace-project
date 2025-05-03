import { Controller, Get } from '@nestjs/common';
import { LaughspaceAppService } from './laughspace-app.service';

@Controller()
export class LaughspaceAppController {
  constructor(private readonly laughspaceAppService: LaughspaceAppService) {}

  @Get()
  getHello(): string {
    return this.laughspaceAppService.getHello();
  }
}
