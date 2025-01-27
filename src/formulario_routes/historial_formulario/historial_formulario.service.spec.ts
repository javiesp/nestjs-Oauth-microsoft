import { Test, TestingModule } from '@nestjs/testing';
import { HistorialFormularioService } from './historial_formulario.service';

describe('HistorialFormularioService', () => {
  let service: HistorialFormularioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialFormularioService],
    }).compile();

    service = module.get<HistorialFormularioService>(HistorialFormularioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
