import { NestFactory } from '@nestjs/core';
import { LaughspaceAppModule } from './laughspace-app.module';
import { setupSwagger } from '@laughspace/common'; // adjust path as needed

async function bootstrap() {
  const app = await NestFactory.create(LaughspaceAppModule);

  app.setGlobalPrefix('api/v1');
  setupSwagger(app, {
    title: 'Laughnya Public API',
    description: 'Mobile/Web public API',
    version: '1.0',
    path: 'api-docs/public',
    tag: 'public',
  });

  await app.listen(process.env.FE_PORT ?? 3100);
}
bootstrap();

