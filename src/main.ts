import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  console.log("backend version 1.0.1");

  await app.listen(3000);
}
bootstrap();
