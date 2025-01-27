import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento> {
    const departamento = this.departamentoRepository.create(createDepartamentoDto); // Creamos una nueva entidad
    return this.departamentoRepository.save(departamento);
  }

  async findAll(page: number, limit: number): Promise<Departamento[]> {
    const currentPage = page;
    const pageSize = limit;

    return this.departamentoRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(id: number): Promise<Departamento> {
    return this.departamentoRepository.findOne({ where: { departamento_id: id } }); // Buscar por ID
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<Departamento> {
    const departamento = await this.departamentoRepository.preload({
      departamento_id: id,
      ...updateDepartamentoDto,
    });

    return this.departamentoRepository.save(departamento);
  }

  async remove(id: number): Promise<void> {
    const departamento = await this.departamentoRepository.findOne({ where: { departamento_id: id } });

    await this.departamentoRepository.remove(departamento);
  }
}
