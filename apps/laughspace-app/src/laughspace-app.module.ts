import { Module } from '@nestjs/common';
import { LaughspaceAppController } from './laughspace-app.controller';
import { LaughspaceAppService } from './laughspace-app.service';

@Module({
  imports: [],
  controllers: [LaughspaceAppController],
  providers: [LaughspaceAppService],
})
export class LaughspaceAppModule {}
