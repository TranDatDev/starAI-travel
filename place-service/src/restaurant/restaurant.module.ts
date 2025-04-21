import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurantService } from './restaurant.service';
import { Restaurant, RestaurantSchema } from './schemas/restaurant.schema';
import { RestaurantPrivateController } from './restaurant.private.controller';
import { RestaurantPublicController } from './restaurant.public.controller';
import { SupabaseService } from '../supabase/supabase.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Restaurant.name, schema: RestaurantSchema },
    ]),
  ],
  controllers: [RestaurantPrivateController, RestaurantPublicController],
  providers: [RestaurantService, SupabaseService],
})
export class RestaurantModule {}
