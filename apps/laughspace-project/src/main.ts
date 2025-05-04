import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from '@laughspace/common'; // adjust path as needed

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1'); // Prefixes all routes
  setupSwagger(app, {
    title: 'Laughnya Admin API',
    description: 'Admin & internal API',
    version: '1.0',
    path: 'api-docs/admin',
    tag: 'admin',
  });

  await app.listen(process.env.BE_PORT ?? 3000);
}
bootstrap();






