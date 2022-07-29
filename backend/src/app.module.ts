import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CompaniesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
