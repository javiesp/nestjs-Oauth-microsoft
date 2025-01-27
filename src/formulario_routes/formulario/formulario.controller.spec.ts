import { Test, TestingModule } from '@nestjs/testing';
import { FormularioController } from './formulario.controller';
import { FormularioService } from './formulario.service';

describe('FormularioController', () => {
  let controller: FormularioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormularioController],
      providers: [FormularioService],
    }).compile();

    controller = module.get<FormularioController>(FormularioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
