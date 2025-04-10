import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationPublicController } from './accommodation.public.controller';
import { AccommodationService } from './accommodation.service';

describe('AccommodationController', () => {
  let controller: AccommodationPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccommodationPublicController],
      providers: [AccommodationService],
    }).compile();

    controller = module.get<AccommodationPublicController>(
      AccommodationPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
