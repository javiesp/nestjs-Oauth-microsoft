import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
import { CentroCosto } from '../centro_costo/entities/centro_costo.entity';
import { TipoProyecto } from '../tipo_proyecto/entities/tipo_proyecto.entity';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

    @InjectRepository(CentroCosto)
    private readonly centroCostoRepository: Repository<CentroCosto>,

    @InjectRepository(TipoProyecto)
    private readonly tipoProyectoRepository: Repository<TipoProyecto>,
  ) {}

  async create(createProyectoDto: CreateProyectoDto) {
    const { type_id, centro_costo_id, ...proyectoData } = createProyectoDto;

    // Verificar si el tipo de proyecto y centro de costo existen
    const tipoProyecto = await this.tipoProyectoRepository.findOne({ where: { type_id: type_id } });
    const centroCosto = await this.centroCostoRepository.findOne({ where: { centro_costo_id: centro_costo_id } });

    if (!tipoProyecto) {
      throw new Error('Tipo de proyecto no encontrado');
    }

    if (!centroCosto) {
      throw new Error('Centro de costo no encontrado');
    }

    const proyecto = this.proyectoRepository.create({
      ...proyectoData,
      type_id: tipoProyecto,
      centro_costo_id: centroCosto,
    });

    return await this.proyectoRepository.save(proyecto);
  }

  async findAll(page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;

    return await this.proyectoRepository.find({
      relations: ['type_id', 'centro_costo_id'],
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(proyecto_id: number) {
    const proyecto = await this.proyectoRepository.findOne({ where: { proyecto_id: proyecto_id } });
    return proyecto;
  }

  async findOneByCentroID(centro_costo_id) {
    return await this.proyectoRepository.find({
      where: { centro_costo_id: centro_costo_id },
      relations: ['type_id', 'centro_costo_id'],
    });
  }

  async findOneByTypeID(type_id) {
    return await this.proyectoRepository.find({
      where: { type_id: type_id },
      relations: ['type_id', 'centro_costo_id'],
    });
  }
  
  async update(proyecto_id: number, updateProyectoDto: UpdateProyectoDto) {
    const proyecto = await this.proyectoRepository.findOne({ where: { proyecto_id }, relations: ['type_id', 'centro_costo_id'] });

    if (!proyecto) {
      throw new Error('Proyecto no encontrado');
    }

    // Verificar si los campos type_id o centro_costo_id se actualizan y si existen
    if (updateProyectoDto.type_id) {
      const tipoProyecto = await this.tipoProyectoRepository.findOne({ where: { type_id: updateProyectoDto.type_id } });
      if (!tipoProyecto) {
        throw new Error('Tipo de proyecto no encontrado');
      }
      proyecto.type_id = tipoProyecto;  // Asignar la entidad TipoProyecto
    }

    if (updateProyectoDto.centro_costo_id) {
      const centroCosto = await this.centroCostoRepository.findOne({ where: { centro_costo_id: updateProyectoDto.centro_costo_id } });
      if (!centroCosto) {
        throw new Error('Centro de costo no encontrado');
      }
      proyecto.centro_costo_id = centroCosto;  // Asignar la entidad CentroCosto
    }

    // Actualizar el proyecto con los nuevos datos
    Object.assign(proyecto, updateProyectoDto);
    await this.proyectoRepository.save(proyecto);

    return proyecto;
  }

  async remove(id: number): Promise<void> {
    await this.proyectoRepository.delete(id);
  }
}
