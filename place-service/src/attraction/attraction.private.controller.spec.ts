import { Test, TestingModule } from '@nestjs/testing';
import { AttractionPrivateController } from './attraction.private.controller';
import { AttractionService } from './attraction.service';

describe('AttractionController', () => {
  let controller: AttractionPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AttractionPrivateController],
      providers: [AttractionService],
    }).compile();

    controller = module.get<AttractionPrivateController>(
      AttractionPrivateController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
