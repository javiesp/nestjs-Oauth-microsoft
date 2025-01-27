import { Test, TestingModule } from '@nestjs/testing';
import { PermisosCargoService } from './permisos-cargo.service';

describe('PermisosCargoService', () => {
  let service: PermisosCargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermisosCargoService],
    }).compile();

    service = module.get<PermisosCargoService>(PermisosCargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
