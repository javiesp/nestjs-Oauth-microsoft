import { Test, TestingModule } from '@nestjs/testing';
import { RespuestaFormularioService } from './respuesta_formulario.service';

describe('RespuestaFormularioService', () => {
  let service: RespuestaFormularioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RespuestaFormularioService],
    }).compile();

    service = module.get<RespuestaFormularioService>(RespuestaFormularioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
