import { Test, TestingModule } from '@nestjs/testing';
import { RandomController } from './random.controller';
import { RandomService } from './random.service';

describe('RandomController', () => {
  let randomController: RandomController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RandomController],
      providers: [RandomService],
    }).compile();

    randomController = app.get<RandomController>(RandomController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(randomController.getHello()).toBe('Hello World!');
    });
  });
});
