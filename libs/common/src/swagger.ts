import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(
  app: INestApplication,
  config: {
    title: string;
    description: string;
    version: string;
    path: string;
    tag: string;
  },
) {
  const builder = new DocumentBuilder()
    .setTitle(config.title)
    .setDescription(config.description)
    .setVersion(config.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, builder, {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      `${config.tag}_${methodKey}`,
  });

  SwaggerModule.setup(config.path, app, document);
}
