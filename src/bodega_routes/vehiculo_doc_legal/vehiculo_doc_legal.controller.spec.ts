import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoDocLegalController } from './vehiculo_doc_legal.controller';
import { VehiculoDocLegalService } from './vehiculo_doc_legal.service';

describe('VehiculoDocLegalController', () => {
  let controller: VehiculoDocLegalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculoDocLegalController],
      providers: [VehiculoDocLegalService],
    }).compile();

    controller = module.get<VehiculoDocLegalController>(VehiculoDocLegalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
