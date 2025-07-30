import { Test, TestingModule } from '@nestjs/testing';
import { FareController } from './fare.controller';
import { FareService } from './fare.service';

describe('FareController', () => {
  let controller: FareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FareController],
      providers: [FareService],
    }).compile();

    controller = module.get<FareController>(FareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
