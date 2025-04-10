import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationPrivateController } from './accommodation.private.controller';
import { AccommodationService } from './accommodation.service';

describe('AccommodationController', () => {
  let controller: AccommodationPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccommodationPrivateController],
      providers: [AccommodationService],
    }).compile();

    controller = module.get<AccommodationPrivateController>(
      AccommodationPrivateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
