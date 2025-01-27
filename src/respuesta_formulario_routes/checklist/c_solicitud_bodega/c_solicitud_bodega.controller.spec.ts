import { Test, TestingModule } from '@nestjs/testing';
import { CSolicitudBodegaController } from './c_solicitud_bodega.controller';
import { CSolicitudBodegaService } from './c_solicitud_bodega.service';

describe('CSolicitudBodegaController', () => {
  let controller: CSolicitudBodegaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CSolicitudBodegaController],
      providers: [CSolicitudBodegaService],
    }).compile();

    controller = module.get<CSolicitudBodegaController>(CSolicitudBodegaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
