import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Включаем CORS для работы с React
  app.enableCors();
  
  // Запускаем сервер на порту 3001
  await app.listen(3001);
}
bootstrap();
