import { Injectable } from '@nestjs/common';

@Injectable()
export class LaughspaceAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
