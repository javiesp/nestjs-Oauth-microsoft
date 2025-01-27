import { Test, TestingModule } from '@nestjs/testing';
import { FormularioService } from './formulario.service';

describe('FormularioService', () => {
  let service: FormularioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormularioService],
    }).compile();

    service = module.get<FormularioService>(FormularioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
