import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialFormulario } from './entities/historial_formulario.entity';
import { CreateHistorialFormularioDto } from './dto/create-historial_formulario.dto';
import { UpdateHistorialFormularioDto } from './dto/update-historial_formulario.dto';

@Injectable()
export class HistorialFormularioService {
  constructor(
    @InjectRepository(HistorialFormulario)
    private readonly historialFormularioRepository: Repository<HistorialFormulario>
  ) {}

  async create(createHistorialFormularioDto: CreateHistorialFormularioDto): Promise<HistorialFormulario> {
    const historialFormulario = this.historialFormularioRepository.create(createHistorialFormularioDto);
    
    return await this.historialFormularioRepository.save(historialFormulario);
  }

  async findAll(page, limit): Promise<HistorialFormulario[]> {
    const currentPage = page;
    const pageSize = limit;

    return await this.historialFormularioRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(id: number): Promise<HistorialFormulario> {
    return await this.historialFormularioRepository.findOne({ where: { historial_id: id } });
  }

  async update(id: number, updateHistorialFormularioDto: UpdateHistorialFormularioDto): Promise<HistorialFormulario> {
    await this.historialFormularioRepository.update(id, updateHistorialFormularioDto);

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.historialFormularioRepository.delete(id);
  }
}
