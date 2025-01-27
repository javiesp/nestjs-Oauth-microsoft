import { Injectable } from '@nestjs/common';
import { CreateTipoProyectoDto } from './dto/create-tipo_proyecto.dto';
import { UpdateTipoProyectoDto } from './dto/update-tipo_proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoProyecto } from './entities/tipo_proyecto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoProyectoService {
  constructor(
    @InjectRepository(TipoProyecto)
    private readonly tipoProyectoRepository: Repository<TipoProyecto>,
  ) {}

  async create(createTipoProyectoDto: CreateTipoProyectoDto): Promise<TipoProyecto> {
    const tipoProyecto = this.tipoProyectoRepository.create(createTipoProyectoDto);
    return await this.tipoProyectoRepository.save(tipoProyecto);
  }

  async findAll(): Promise<TipoProyecto[]> {
    return await this.tipoProyectoRepository.find();
  }

  async findOne(id: number): Promise<TipoProyecto> {
    const tipoProyecto = await this.tipoProyectoRepository.findOne({ where: { type_id: id } });
    if (!tipoProyecto) {
      throw new Error('Tipo de proyecto no encontrado');
    }
    return tipoProyecto;
  }

  async update(id: number, updateTipoProyectoDto: UpdateTipoProyectoDto): Promise<TipoProyecto> {
    const tipoProyecto = await this.tipoProyectoRepository.findOne({ where: { type_id: id } });
    if (!tipoProyecto) {
      throw new Error('Tipo de proyecto no encontrado');
    }
    await this.tipoProyectoRepository.update(id, updateTipoProyectoDto);
    return this.tipoProyectoRepository.findOne({ where: { type_id: id } });
  }

  async remove(id: number): Promise<void> {
    const tipoProyecto = await this.tipoProyectoRepository.findOne({ where: { type_id: id } });
    if (!tipoProyecto) {
      throw new Error('Tipo de proyecto no encontrado');
    }
    await this.tipoProyectoRepository.delete(id);
  }
}