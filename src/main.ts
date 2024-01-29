import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan'
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  const ConfigServices = app.get(ConfigService);
  app.enableCors(CORS);
  app.setGlobalPrefix('API');
  await app.listen(ConfigServices.get('PORT'));
  console.log(`Aplicaticon running on: ${await app.getUrl()}`)

}
bootstrap();
