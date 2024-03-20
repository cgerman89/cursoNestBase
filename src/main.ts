import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  //se aplica a toda la aplicacion global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo deja pasar la data que defini en la interface 
      forbidNonWhitelisted: true
    })
  )

  await app.listen(5000);
}

main();
