import { Test, TestingModule } from '@nestjs/testing';
import { PriceDetailController } from './price-detail.controller';
import { PriceDetailService } from './price-detail.service';

describe('PriceDetailController', () => {
  let controller: PriceDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceDetailController],
      providers: [PriceDetailService],
    }).compile();

    controller = module.get<PriceDetailController>(PriceDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
