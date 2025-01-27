import { Test, TestingModule } from '@nestjs/testing';
import { HistorialFormularioController } from './historial_formulario.controller';
import { HistorialFormularioService } from './historial_formulario.service';

describe('HistorialFormularioController', () => {
  let controller: HistorialFormularioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialFormularioController],
      providers: [HistorialFormularioService],
    }).compile();

    controller = module.get<HistorialFormularioController>(HistorialFormularioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
