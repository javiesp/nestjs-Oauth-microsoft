import { Test, TestingModule } from '@nestjs/testing';
import { PermisosCargoController } from './permisos-cargo.controller';
import { PermisosCargoService } from './permisos-cargo.service';

describe('PermisosCargoController', () => {
  let controller: PermisosCargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermisosCargoController],
      providers: [PermisosCargoService],
    }).compile();

    controller = module.get<PermisosCargoController>(PermisosCargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
