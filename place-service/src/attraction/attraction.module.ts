import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttractionService } from './attraction.service';
import { Attraction, AttractionSchema } from './schemas/attraction.schema';
import { AttractionPrivateController } from './attraction.private.controller';
import { AttractionPublicController } from './attraction.public.controller';
import { SupabaseService } from '../supabase/supabase.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Attraction.name, schema: AttractionSchema },
    ]),
  ],
  controllers: [AttractionPrivateController, AttractionPublicController],
  providers: [AttractionService, SupabaseService],
})
export class AttractionModule {}
