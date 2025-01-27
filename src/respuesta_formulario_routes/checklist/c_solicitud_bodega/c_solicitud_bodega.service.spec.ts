import { Test, TestingModule } from '@nestjs/testing';
import { CSolicitudBodegaService } from './c_solicitud_bodega.service';

describe('CSolicitudBodegaService', () => {
  let service: CSolicitudBodegaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CSolicitudBodegaService],
    }).compile();

    service = module.get<CSolicitudBodegaService>(CSolicitudBodegaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
