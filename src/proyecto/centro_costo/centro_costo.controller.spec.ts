import { Test, TestingModule } from '@nestjs/testing';
import { CentroCostoController } from './centro_costo.controller';
import { CentroCostoService } from './centro_costo.service';

describe('CentroCostoController', () => {
  let controller: CentroCostoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentroCostoController],
      providers: [CentroCostoService],
    }).compile();

    controller = module.get<CentroCostoController>(CentroCostoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
