import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // 应用程序的入口文件，使用核心函数NestFactory创建Nest应用程序实例。
  const app = await NestFactory.create(AppModule);

  // MENTION: set a global prefix
  app.setGlobalPrefix('v1');

  console.log("backend version 1.0.1");

  await app.listen(3000);
}
bootstrap();
