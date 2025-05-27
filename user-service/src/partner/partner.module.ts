import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerPublicController } from './partner.public.controller';
import { PartnerPrivateController } from './partner.private.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: 10 * 1024 * 1024 },
    }),
    PrismaModule,
    SupabaseModule,
  ],
  controllers: [PartnerPublicController, PartnerPrivateController],
  providers: [PartnerService],
})
export class PartnerModule {}
