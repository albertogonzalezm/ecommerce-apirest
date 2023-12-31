import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });
  const config = new DocumentBuilder()
    .setTitle('ONSHOP')
    .setDescription('OnShop API')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('company')
    .addServer(`http://localhost:${process.env.PORT}`, 'Local development')
    .addCookieAuth('access_token')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());

  await app.listen(process.env.PORT);
}
bootstrap();
