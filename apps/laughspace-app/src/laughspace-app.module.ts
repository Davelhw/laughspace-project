import { Module } from '@nestjs/common';
import { LaughspaceAppController } from './laughspace-app.controller';
import { LaughspaceAppService } from './laughspace-app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DbModule } from '@laughspace/db';
import { UserModule } from '@laughspace/user';
import { PingController } from './ping.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/laughspace'),
    DbModule,
    UserModule,
  ],
  controllers: [LaughspaceAppController, PingController],
  providers: [LaughspaceAppService],
})
export class LaughspaceAppModule {}
