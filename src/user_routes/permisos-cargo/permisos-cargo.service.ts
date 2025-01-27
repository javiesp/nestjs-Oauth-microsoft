import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePermisosCargoDto } from './dto/create-permisos-cargo.dto';
import { UpdatePermisosCargoDto } from './dto/update-permisos-cargo.dto';
import { PermisosCargo } from './entities/permisos-cargo.entity';

@Injectable()
export class PermisosCargoService {
  constructor(
    @InjectRepository(PermisosCargo)
    private readonly permisosCargoRepository: Repository<PermisosCargo>,
  ) {}

  async create(createPermisosCargoDto: CreatePermisosCargoDto): Promise<PermisosCargo> {
    const permisosCargo = this.permisosCargoRepository.create(createPermisosCargoDto);
    return this.permisosCargoRepository.save(permisosCargo);
  }

  async findAll(): Promise<PermisosCargo[]> {
    return this.permisosCargoRepository.find();
  }

  async findAllByFormName(formulario: string): Promise<PermisosCargo | null> {
    return this.permisosCargoRepository.findOne({ where: { formulario: formulario } });
  }

  async findAllByNameAndCargo(formulario: string, cargo_id): Promise<PermisosCargo | null> {
    return this.permisosCargoRepository.findOne({ where: { formulario: formulario, cargo_id: cargo_id } });
  }

  async findOne(id: number): Promise<PermisosCargo | null> {
    return this.permisosCargoRepository.findOne({ where: { permisos_cargo_id: id } });
  }

  async update(id: number, updatePermisosCargoDto: UpdatePermisosCargoDto): Promise<PermisosCargo> {
    await this.permisosCargoRepository.update(id, updatePermisosCargoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return this.permisosCargoRepository.delete(id);
  }
}
