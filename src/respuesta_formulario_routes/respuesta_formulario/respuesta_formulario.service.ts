import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RespuestaFormulario } from './entities/respuesta_formulario.entity';
import { CreateRespuestaFormularioDto } from './dto/create-respuesta_formulario.dto';
import { UpdateRespuestaFormularioDto } from './dto/update-respuesta_formulario.dto';
import { Formulario } from '../../formulario_routes/formulario/entities/formulario.entity'
import { User } from '../../user_routes/user/entities/user.entity'
import { Vehiculo } from '../../bodega_routes/vehiculo/entities/vehiculo.entity'
import { Instrumento } from '../../bodega_routes/instrumento/entities/instrumento.entity'
import { Proyecto } from '../../proyecto/proyecto/entities/proyecto.entity'
import { EstadoFormulario } from '../estado_formulario/entities/estado_formulario.entity';

@Injectable()
export class RespuestaFormularioService {
  constructor(
    @InjectRepository(RespuestaFormulario)
    private readonly respuestaFormularioRepository: Repository<RespuestaFormulario>,

    @InjectRepository(Formulario)
    private readonly formularioRepository: Repository<Formulario>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,

    @InjectRepository(Instrumento)
    private readonly instrumentoRepository: Repository<Instrumento>,

    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,

    @InjectRepository(EstadoFormulario)
    private readonly estadoFormularioRepository: Repository<EstadoFormulario>,
  ) {}

  async create(createRespuestaFormularioDto: CreateRespuestaFormularioDto) {
    const {
      formulario_id,
      user_id,
      vehiculo_id,
      Instrumento_id,
      fecha_respuesta,
      proyecto_id,
      estado_id,
      ...respuestaFormularioData
    } = createRespuestaFormularioDto;

    // Verificar si el formulario existe
    const formulario = await this.formularioRepository.findOne({ where: { formulario_id } });

    if (!formulario) {
      throw new Error('Formulario no encontrado');
    }

    // Crear una respuesta de formulario
    const respuestaFormulario = this.respuestaFormularioRepository.create({
      ...respuestaFormularioData,
      formulario_id: formulario,
      fecha_respuesta: fecha_respuesta || new Date(), // Usar la fecha actual si no se proporciona
    });

    if (user_id) {
      const user = await this.userRepository.findOne({ where: { user_id } });
      if (user) {
        respuestaFormulario.user_id = user;
      }
    }

    if (vehiculo_id) {
      const vehiculo = await this.vehiculoRepository.findOne({ where: { vehiculo_id } });
      if (vehiculo) {
        respuestaFormulario.vehiculo_id = vehiculo;
      }
    }

    if (Instrumento_id) {
      const instrumento = await this.instrumentoRepository.findOne({ where: { Instrumento_id } });
      if (instrumento) {
        respuestaFormulario.Instrumento_id = instrumento;
      }
    }

    if (proyecto_id) {
      const proyecto = await this.proyectoRepository.findOne({ where: { proyecto_id } });
      if (proyecto) {
        respuestaFormulario.proyecto_id = proyecto;
      }
    }

    if (estado_id) {
      const estado = await this.estadoFormularioRepository.findOne({ where: { estado_id } });
      if (estado) {
        respuestaFormulario.estado_id = estado;
      }
    }

    return await this.respuestaFormularioRepository.save(respuestaFormulario);
  }

  async findAll(page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;

    return await this.respuestaFormularioRepository.find({
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
  }

  async findOne(id: number) {
    const respuestaFormulario = await this.respuestaFormularioRepository.findOne({
      where: { respuesta_formulario_id: id },
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
    });

    return respuestaFormulario;
  }

  async findByFormID(formulario_id, page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;
  
    const respuestaFormularios = await this.respuestaFormularioRepository.find({
      where: { formulario_id: formulario_id },
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
  
    return respuestaFormularios;
  }
  
  async findByUserID(formulario_id, user_id, page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;
  
    const respuestaFormularios = await this.respuestaFormularioRepository.find({
      where: { formulario_id: formulario_id, user_id: user_id },
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
  
    return respuestaFormularios;
  }

  async findByProyectoID(formulario_id, proyecto_id, page: number, limit: number) {
    const currentPage = page;
    const pageSize = limit;
  
    const respuestaFormularios = await this.respuestaFormularioRepository.find({
      where: { formulario_id: formulario_id, user_id: proyecto_id },
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
    });
  
    return respuestaFormularios;
  }

  async update(id: number, updateRespuestaFormularioDto: UpdateRespuestaFormularioDto) {
    const respuestaFormulario = await this.respuestaFormularioRepository.findOne({
      where: { respuesta_formulario_id: id },
      relations: ['formulario_id', 'user_id', 'vehiculo_id', 'Instrumento_id', 'proyecto_id', 'estado_id'],
    });

    if (!respuestaFormulario) {
      throw new Error('Respuesta de formulario no encontrada');
    }

    // Actualizar solo los campos proporcionados
    const {
      formulario_id,
      user_id,
      vehiculo_id,
      Instrumento_id,
      fecha_respuesta,
      proyecto_id,
      estado_id,
      ...updateData
    } = updateRespuestaFormularioDto;

    if (formulario_id) {
      const formulario = await this.formularioRepository.findOne({ where: { formulario_id } });
      if (formulario) {
        respuestaFormulario.formulario_id = formulario;
      }
    }

    if (user_id) {
      const user = await this.userRepository.findOne({ where: { user_id } });
      if (user) {
        respuestaFormulario.user_id = user;
      }
    }

    if (vehiculo_id) {
      const vehiculo = await this.vehiculoRepository.findOne({ where: { vehiculo_id } });
      if (vehiculo) {
        respuestaFormulario.vehiculo_id = vehiculo;
      }
    }

    if (Instrumento_id) {
      const instrumento = await this.instrumentoRepository.findOne({ where: { Instrumento_id } });
      if (instrumento) {
        respuestaFormulario.Instrumento_id = instrumento;
      }
    }

    if (proyecto_id) {
      const proyecto = await this.proyectoRepository.findOne({ where: { proyecto_id } });
      if (proyecto) {
        respuestaFormulario.proyecto_id = proyecto;
      }
    }

    if (estado_id) {
      const estado = await this.estadoFormularioRepository.findOne({ where: { estado_id } });
      if (estado) {
        respuestaFormulario.estado_id = estado;
      }
    }

    // Actualizar los demás campos
    Object.assign(respuestaFormulario, updateData);
    await this.respuestaFormularioRepository.save(respuestaFormulario);

    return respuestaFormulario;
  }

  async remove(id: number): Promise<void> {
    await this.respuestaFormularioRepository.delete(id);
  }
}
