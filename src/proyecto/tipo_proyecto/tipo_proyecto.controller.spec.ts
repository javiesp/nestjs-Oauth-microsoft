import { Test, TestingModule } from '@nestjs/testing';
import { TipoProyectoController } from './tipo_proyecto.controller';
import { TipoProyectoService } from './tipo_proyecto.service';

describe('TipoProyectoController', () => {
  let controller: TipoProyectoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoProyectoController],
      providers: [TipoProyectoService],
    }).compile();

    controller = module.get<TipoProyectoController>(TipoProyectoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
