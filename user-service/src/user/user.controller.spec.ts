import { Test, TestingModule } from '@nestjs/testing';
import { UserPrivateController } from './user.private.controller';
import { UserService } from './user.service';

describe('UserPrivateController', () => {
  let controller: UserPrivateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPrivateController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserPrivateController>(UserPrivateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
