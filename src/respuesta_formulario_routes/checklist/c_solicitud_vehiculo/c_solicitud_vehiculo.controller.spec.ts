import { Test, TestingModule } from '@nestjs/testing';
import { CSolicitudVehiculoController } from './c_solicitud_vehiculo.controller';
import { CSolicitudVehiculoService } from './c_solicitud_vehiculo.service';

describe('CSolicitudVehiculoController', () => {
  let controller: CSolicitudVehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CSolicitudVehiculoController],
      providers: [CSolicitudVehiculoService],
    }).compile();

    controller = module.get<CSolicitudVehiculoController>(CSolicitudVehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
