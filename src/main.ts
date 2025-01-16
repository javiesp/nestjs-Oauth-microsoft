import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // Load environment variables
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for frontend communication
  await app.listen(3000);
}
bootstrap();
