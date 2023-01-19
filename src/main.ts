import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import enviroment = require('dotenv');
import { ValidationPipe } from '@nestjs/common';
enviroment.config();
const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT || 3001);
}
bootstrap();
