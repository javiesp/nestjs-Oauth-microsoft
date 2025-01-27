import { Test, TestingModule } from '@nestjs/testing';
import { TipoProyectoService } from './tipo_proyecto.service';

describe('TipoProyectoService', () => {
  let service: TipoProyectoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoProyectoService],
    }).compile();

    service = module.get<TipoProyectoService>(TipoProyectoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
