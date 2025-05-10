import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPrivateController } from './user.private.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserPublicController } from './user.public.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
    PrismaModule,
    SupabaseModule,
  ],
  controllers: [UserPrivateController, UserPublicController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
