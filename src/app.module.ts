import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [UserModule, AuthModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
