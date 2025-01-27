import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CSolicitudBodega } from './entities/c_solicitud_bodega.entity';
import { CreateCSolicitudBodegaDto } from './dto/create-c_solicitud_bodega.dto';
import { UpdateCSolicitudBodegaDto } from './dto/update-c_solicitud_bodega.dto';
import { RespuestaFormulario } from '../../respuesta_formulario/entities/respuesta_formulario.entity';

@Injectable()
export class CSolicitudBodegaService {
  constructor(
    @InjectRepository(CSolicitudBodega)
    private readonly cSolicitudBodegaRepository: Repository<CSolicitudBodega>,

    @InjectRepository(RespuestaFormulario)
    private readonly respuestaFormularioRepository: Repository<RespuestaFormulario>,
  ) {}

  async create(createCSolicitudBodegaDto: CreateCSolicitudBodegaDto) {
    const { respuesta_formulario_id, ...rest } = createCSolicitudBodegaDto;

    const respuestaFormulario = await this.respuestaFormularioRepository.findOne({
      where: { respuesta_formulario_id: respuesta_formulario_id },
    });

    if (!respuestaFormulario) {
      throw new NotFoundException('Respuesta del formulario no encontrada');
    }

    const cSolicitudBodega = this.cSolicitudBodegaRepository.create({
      ...rest,
      respuesta_formulario_id: respuestaFormulario,
    });

    return await this.cSolicitudBodegaRepository.save(cSolicitudBodega);
  }

  async findAll(page, limit) {
    const currentPage = page;
    const pageSize = limit;

    return await this.cSolicitudBodegaRepository.find({
      relations: ['respuesta_formulario_id'],
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(id: number) {
    const solicitud = await this.cSolicitudBodegaRepository.findOne({
      where: { seb_checklist_id: id },
      relations: ['respuesta_formulario_id'],
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    }

    return solicitud;
  }

  async findOneByRespuestaID(respuesta_formulario_id) {
    const solicitud = await this.cSolicitudBodegaRepository.findOne({
      where: { respuesta_formulario_id: respuesta_formulario_id },
      relations: ['respuesta_formulario_id'],
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${respuesta_formulario_id} no encontrada`);
    }

    return solicitud;
  }

  async update(id: number, updateCSolicitudBodegaDto: UpdateCSolicitudBodegaDto) {
    const solicitud = await this.cSolicitudBodegaRepository.findOne({
      where: { seb_checklist_id: id },
      relations: ['respuesta_formulario_id'],
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    }

    Object.assign(solicitud, updateCSolicitudBodegaDto);

    return await this.cSolicitudBodegaRepository.save(solicitud);
  }

  async remove(id: number) {
    const solicitud = await this.cSolicitudBodegaRepository.findOne({
      where: { seb_checklist_id: id },
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    }

    await this.cSolicitudBodegaRepository.delete(id);
  }
}
