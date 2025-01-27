import { Test, TestingModule } from '@nestjs/testing';
import { EstadoFormularioService } from './estado_formulario.service';

describe('EstadoFormularioService', () => {
  let service: EstadoFormularioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadoFormularioService],
    }).compile();

    service = module.get<EstadoFormularioService>(EstadoFormularioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
