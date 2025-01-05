import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

import { CustomerModule } from './ecommerce/customer/customer.module';
import { AccountModule } from './ecommerce/account/account.module';

@Module({
  imports: [CustomerModule, AccountModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
