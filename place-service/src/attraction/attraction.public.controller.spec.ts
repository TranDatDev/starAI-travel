import { Test, TestingModule } from '@nestjs/testing';
import { AttractionPublicController } from './attraction.public.controller';
import { AttractionService } from './attraction.service';

describe('AttractionController', () => {
  let controller: AttractionPublicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttractionPublicController],
      providers: [AttractionService],
    }).compile();

    controller = module.get<AttractionPublicController>(
      AttractionPublicController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
