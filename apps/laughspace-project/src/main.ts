import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '@laughspace/common';
import * as dotenv from 'dotenv';

dotenv.config(); // load .env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  setupSwagger(app, {
    title: 'Laughnya Admin API',
    description: 'Admin & internal API',
    version: '1.0',
    path: 'api-docs/admin',
    tag: 'admin',
  });

  const port = parseInt(process.env.BE_PORT || '3000', 10);
  await app.listen(port);
  console.log(`✅ Backend running at http://localhost:${port}`);
  console.log(`📘 Swagger (admin): http://localhost:${port}/api-docs/admin`);
}
bootstrap();
