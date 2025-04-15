import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccommodationModule } from './accommodation/accommodation.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationModule } from './location/location.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { AttractionModule } from './attraction/attraction.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    AccommodationModule,
    LocationModule,
    RestaurantModule,
    AttractionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
