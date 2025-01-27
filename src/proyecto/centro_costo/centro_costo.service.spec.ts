import { Test, TestingModule } from '@nestjs/testing';
import { CentroCostoService } from './centro_costo.service';

describe('CentroCostoService', () => {
  let service: CentroCostoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroCostoService],
    }).compile();

    service = module.get<CentroCostoService>(CentroCostoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
