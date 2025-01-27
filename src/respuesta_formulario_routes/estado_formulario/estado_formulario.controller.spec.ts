import { Test, TestingModule } from '@nestjs/testing';
import { EstadoFormularioController } from './estado_formulario.controller';
import { EstadoFormularioService } from './estado_formulario.service';

describe('EstadoFormularioController', () => {
  let controller: EstadoFormularioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadoFormularioController],
      providers: [EstadoFormularioService],
    }).compile();

    controller = module.get<EstadoFormularioController>(EstadoFormularioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
