import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as process from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Bật cors
  app.enableCors();
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(process.env.PORT || 3001, '0.0.0.0');
}
bootstrap();
