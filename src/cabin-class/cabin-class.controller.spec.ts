import { Test, TestingModule } from '@nestjs/testing';
import { CabinClassController } from './cabin-class.controller';

describe('CabinClassController', () => {
  let controller: CabinClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabinClassController],
    }).compile();

    controller = module.get<CabinClassController>(CabinClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
