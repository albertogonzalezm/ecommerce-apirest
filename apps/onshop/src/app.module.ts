import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CompanyController } from './company/company.controller';
import { CompanyModule } from './company/company.module';

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
  ],
  controllers: [AppController, CompanyController],
  providers: [AppService],
})
export class AppModule {}
