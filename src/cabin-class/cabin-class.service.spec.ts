import { Test, TestingModule } from '@nestjs/testing';
import { CabinClassService } from './cabin-class.service';

describe('CabinClassService', () => {
  let service: CabinClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabinClassService],
    }).compile();

    service = module.get<CabinClassService>(CabinClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
