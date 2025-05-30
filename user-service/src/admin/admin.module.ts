import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ManagerModule } from '../manager/manager.module';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [ManagerModule, PrismaModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
