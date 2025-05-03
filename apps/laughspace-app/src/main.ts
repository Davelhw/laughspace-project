import { NestFactory } from '@nestjs/core';
import { LaughspaceAppModule } from './laughspace-app.module';

async function bootstrap() {
  const app = await NestFactory.create(LaughspaceAppModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
