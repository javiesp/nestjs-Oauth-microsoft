import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoDocLegalService } from './vehiculo_doc_legal.service';

describe('VehiculoDocLegalService', () => {
  let service: VehiculoDocLegalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculoDocLegalService],
    }).compile();

    service = module.get<VehiculoDocLegalService>(VehiculoDocLegalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
