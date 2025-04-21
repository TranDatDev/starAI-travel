import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantPublicController } from './restaurant.public.controller';
import { RestaurantService } from './restaurant.service';

describe('RestaurantController', () => {
  let controller: RestaurantPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantPublicController],
      providers: [RestaurantService],
    }).compile();

    controller = module.get<RestaurantPublicController>(
      RestaurantPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
