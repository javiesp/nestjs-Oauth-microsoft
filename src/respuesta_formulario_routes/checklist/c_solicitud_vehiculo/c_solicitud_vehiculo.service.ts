import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CSolicitudVehiculo } from './entities/c_solicitud_vehiculo.entity';
import { CreateCSolicitudVehiculoDto } from './dto/create-c_solicitud_vehiculo.dto';
import { UpdateCSolicitudVehiculoDto } from './dto/update-c_solicitud_vehiculo.dto';
import { RespuestaFormulario } from '../../respuesta_formulario/entities/respuesta_formulario.entity';

@Injectable()
export class CSolicitudVehiculoService {
  constructor(
    @InjectRepository(CSolicitudVehiculo)
    private readonly cSolicitudVehiculoRepository: Repository<CSolicitudVehiculo>,

    @InjectRepository(RespuestaFormulario)
    private readonly respuestaFormularioRepository: Repository<RespuestaFormulario>,
  ) {}

  async create(createCSolicitudVehiculoDto: CreateCSolicitudVehiculoDto) {

    const response = await this.respuestaFormularioRepository.findOne({
      where: { respuesta_formulario_id: createCSolicitudVehiculoDto.respuesta_formulario_id },
    });

    if (!response) {
      throw new NotFoundException('Respuesta de formulario no encontrada');
    }

    const cSolicitudVehiculo = this.cSolicitudVehiculoRepository.create({
      ...createCSolicitudVehiculoDto,
      respuesta_formulario_id: response,
    });

    return await this.cSolicitudVehiculoRepository.save(cSolicitudVehiculo);
  }

  async findAll(page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;

    return await this.cSolicitudVehiculoRepository.find({
      relations: ['respuesta_formulario_id'],
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
  }

  async findOne(id: number) {
    const cSolicitudVehiculo = await this.cSolicitudVehiculoRepository.findOne({
      where: { sv_checklist_id: id },
      relations: ['respuesta_formulario_id'],
    });

    if (!cSolicitudVehiculo) {
      throw new NotFoundException(`Solicitud de vehículo con ID ${id} no encontrada`);
    }

    return cSolicitudVehiculo;
  }

  async findOneByRespuestaID(respuesta_formulario_id) {
    const solicitud = await this.cSolicitudVehiculoRepository.findOne({
      where: { respuesta_formulario_id: respuesta_formulario_id },
      relations: ['respuesta_formulario_id'],
    });

    if (!solicitud) {
      throw new NotFoundException(`Solicitud con ID ${respuesta_formulario_id} no encontrada`);
    }

    return solicitud;
  }

  async update(id: number, updateCSolicitudVehiculoDto: UpdateCSolicitudVehiculoDto) {
    const cSolicitudVehiculo = await this.cSolicitudVehiculoRepository.findOne({
      where: { sv_checklist_id: id },
      relations: ['respuesta_formulario_id'],
    });

    if (!cSolicitudVehiculo) {
      throw new NotFoundException(`Solicitud de vehículo con ID ${id} no encontrada`);
    }

    if (updateCSolicitudVehiculoDto.respuesta_formulario_id) {
      const respuestaFormulario = await this.respuestaFormularioRepository.findOne({
        where: { respuesta_formulario_id: updateCSolicitudVehiculoDto.respuesta_formulario_id },
      });

      if (!respuestaFormulario) {
        throw new NotFoundException('Respuesta de formulario no encontrada');
      }

      cSolicitudVehiculo.respuesta_formulario_id = respuestaFormulario;
    }

    Object.assign(cSolicitudVehiculo, updateCSolicitudVehiculoDto);
    await this.cSolicitudVehiculoRepository.save(cSolicitudVehiculo);

    return cSolicitudVehiculo;
  }

  async remove(id: number) {
    const cSolicitudVehiculo = await this.cSolicitudVehiculoRepository.findOne({
      where: { sv_checklist_id: id },
    });

    if (!cSolicitudVehiculo) {
      throw new NotFoundException(`Solicitud de vehículo con ID ${id} no encontrada`);
    }

    await this.cSolicitudVehiculoRepository.delete(id);
  }
}
