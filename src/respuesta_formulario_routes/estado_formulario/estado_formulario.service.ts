import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoFormularioDto } from './dto/create-estado_formulario.dto';
import { UpdateEstadoFormularioDto } from './dto/update-estado_formulario.dto';
import { EstadoFormulario } from './entities/estado_formulario.entity';

@Injectable()
export class EstadoFormularioService {
  constructor(
    @InjectRepository(EstadoFormulario)
    private readonly estadoFormularioRepository: Repository<EstadoFormulario>,
  ) {}

  async create(createEstadoFormularioDto: CreateEstadoFormularioDto): Promise<EstadoFormulario> {
    const estadoFormulario = this.estadoFormularioRepository.create(createEstadoFormularioDto);
    return await this.estadoFormularioRepository.save(estadoFormulario);
  }

  async findAll(page: number = 1, limit: number = 5): Promise<EstadoFormulario[]> {
    return await this.estadoFormularioRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(estado_id: number): Promise<EstadoFormulario> {
    return await this.estadoFormularioRepository.findOne({ where: { estado_id: estado_id } });
  }

  async update(estado_id: number, updateEstadoFormularioDto: UpdateEstadoFormularioDto): Promise<EstadoFormulario> {
    const estadoFormulario = await this.estadoFormularioRepository.findOne({ where: { estado_id: estado_id } });

    if (!estadoFormulario) {
      throw new Error('EstadoFormulario no encontrado');
    }

    // Actualizar la entidad con los nuevos datos
    Object.assign(estadoFormulario, updateEstadoFormularioDto);
    await this.estadoFormularioRepository.save(estadoFormulario);

    return estadoFormulario;
  }

  async remove(id: number): Promise<void> {
    await this.estadoFormularioRepository.delete(id);
  }
}
