import { Test, TestingModule } from '@nestjs/testing';
import { CSolicitudVehiculoService } from './c_solicitud_vehiculo.service';

describe('CSolicitudVehiculoService', () => {
  let service: CSolicitudVehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CSolicitudVehiculoService],
    }).compile();

    service = module.get<CSolicitudVehiculoService>(CSolicitudVehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
