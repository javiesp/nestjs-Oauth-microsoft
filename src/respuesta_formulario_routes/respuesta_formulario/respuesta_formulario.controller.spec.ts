import { Test, TestingModule } from '@nestjs/testing';
import { RespuestaFormularioController } from './respuesta_formulario.controller';
import { RespuestaFormularioService } from './respuesta_formulario.service';

describe('RespuestaFormularioController', () => {
  let controller: RespuestaFormularioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespuestaFormularioController],
      providers: [RespuestaFormularioService],
    }).compile();

    controller = module.get<RespuestaFormularioController>(RespuestaFormularioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
