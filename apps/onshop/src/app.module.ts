import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompanyController } from './company/company.controller';
import { CompanyModule } from './company/company.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    ClientsModule.register([
      {
        name: 'COMPANY_SERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
    CompanyModule,
    ProductsModule,
  ],
  controllers: [AppController, CompanyController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
