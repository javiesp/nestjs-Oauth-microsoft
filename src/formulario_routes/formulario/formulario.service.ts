import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formulario } from './entities/formulario.entity';
import { CreateFormularioDto } from './dto/create-formulario.dto';
import { UpdateFormularioDto } from './dto/update-formulario.dto';
import { Departamento } from '../departamento/entities/departamento.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class FormularioService {
  constructor(
    @InjectRepository(Formulario)
    private readonly formularioRepository: Repository<Formulario>,

    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(createFormularioDto: CreateFormularioDto): Promise<Formulario> {
    const { departamento_id, ...rest } = createFormularioDto;

    // Obtener la entidad de Departamento a partir del ID
    const departamento = departamento_id
      ? await this.departamentoRepository.findOne({ where: { departamento_id } })
      : null;

    if (departamento_id && !departamento) {
      throw new NotFoundException(`Departamento with ID ${departamento_id} not found`);
    }

    const formulario = this.formularioRepository.create({
      ...rest,
      departamento,
    });

    return await this.formularioRepository.save(formulario);
  }

  async findAll(page: number = 1, limit: number = 10): Promise<Formulario[]> {
    const [result, total] = await this.formularioRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['departamento'],
    });
    return result;
  }

  async findOne(id: number): Promise<Formulario> {
    const formulario = await this.formularioRepository.findOne({
      where: { formulario_id: id },
      relations: ['departamento'],
    });

    if (!formulario) {
      throw new NotFoundException(`Formulario with ID ${id} not found`);
    }

    return formulario;
  }

  async findOneByName(nombre_form): Promise<Formulario> {
    const formulario = await this.formularioRepository.findOne({
      where: { nombre_form: nombre_form },
      relations: ['departamento'],
    });

    if (!formulario) {
      throw new NotFoundException(`Formulario ${nombre_form} not found`);
    }

    return formulario;
  }

  async findOneByDepID(departamento_id: number): Promise<Formulario> {
    const formulario = await this.formularioRepository.findOne({
      where: { departamento: { departamento_id: departamento_id } },
      relations: ['departamento'],
    });
  
    if (!formulario) {
      throw new NotFoundException(`Formulario con departamento ${departamento_id} no encontrado`);
    }
  
    return formulario;
  }

  async update(id: number, updateFormularioDto: UpdateFormularioDto): Promise<Formulario> {
    const formulario = await this.findOne(id);

    const { departamento_id, ...rest } = updateFormularioDto;

    if (departamento_id) {
      const departamento = await this.departamentoRepository.findOne({
        where: { departamento_id },
      });
      if (!departamento) {
        throw new NotFoundException(`Departamento with ID ${departamento_id} not found`);
      }
      formulario.departamento = departamento;
    }

    Object.assign(formulario, rest);

    return await this.formularioRepository.save(formulario);
  }

  async remove(id: number): Promise<void> {
    const formulario = await this.findOne(id);
    await this.formularioRepository.remove(formulario);
  }
}
