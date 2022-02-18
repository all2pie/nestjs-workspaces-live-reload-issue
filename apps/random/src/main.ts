import { NestFactory } from '@nestjs/core';
import { RandomModule } from './random.module';

async function bootstrap() {
  const app = await NestFactory.create(RandomModule);
  await app.listen(3000);
}
bootstrap();
