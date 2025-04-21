import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantPrivateController } from './restaurant.private.controller';
import { RestaurantService } from './restaurant.service';

describe('RestaurantController', () => {
  let controller: RestaurantPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantPrivateController],
      providers: [RestaurantService],
    }).compile();

    controller = module.get<RestaurantPrivateController>(
      RestaurantPrivateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
