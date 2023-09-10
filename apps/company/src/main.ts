import { NestFactory } from '@nestjs/core';
import { CompanyModule } from './company.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    CompanyModule,
    {
      transport: Transport.TCP,
      options: { port: 3001 },
    },
  );
  await app.listen();
}
bootstrap();
