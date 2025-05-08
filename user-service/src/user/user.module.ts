import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPrivateController } from './user.private.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserPublicController } from './user.public.controller';

@Module({
  imports: [PrismaModule],
  controllers: [UserPrivateController, UserPublicController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
