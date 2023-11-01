import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true, // restringe el envio de propiedades que no estan definidas en el DTO (definir la propiedad y sus atributos)
    forbidNonWhitelisted: true, // Elimina las propiedades No definidas en el DTO
    transform: true, // Transforma los datos de los dto
    transformOptions: {
      enableImplicitConversion: true
    }
    })
   );

  await app.listen(3000);
}
bootstrap();
