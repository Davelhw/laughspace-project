import { NestFactory } from '@nestjs/core';
import { LaughspaceAppModule } from './laughspace-app.module';
import { setupSwagger } from '@laughspace/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(LaughspaceAppModule);
  app.setGlobalPrefix('api/v1');

  setupSwagger(app, {
    title: 'Laughnya Public API',
    description: 'Frontend mobile/web API',
    version: '1.0',
    path: 'api-docs/public',
    tag: 'public',
  });

  const port = parseInt(process.env.FE_PORT || '3100', 10);
  await app.listen(port);
  console.log(`✅ Frontend running at http://localhost:${port}`);
  console.log(`📘 Swagger (public): http://localhost:${port}/api-docs/public`);
}
bootstrap();
