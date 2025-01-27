import { Injectable } from '@nestjs/common';
import { CreateCentroCostoDto } from './dto/create-centro_costo.dto';
import { UpdateCentroCostoDto } from './dto/update-centro_costo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CentroCosto } from './entities/centro_costo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CentroCostoService {
  constructor(
    @InjectRepository(CentroCosto)
    private readonly centroCostoRepository: Repository<CentroCosto>,
  ) {}

  async create(createCentroCostoDto: CreateCentroCostoDto): Promise<CentroCosto> {
    const centroCosto = this.centroCostoRepository.create(createCentroCostoDto);
    return await this.centroCostoRepository.save(centroCosto);
  }

  async findAll(page: number = 1, limit: number = 5): Promise<CentroCosto[]> {
    return this.centroCostoRepository.find({
      take: limit, 
      skip: (page - 1) * limit, 
    });
  }

  async findOne(id: number): Promise<CentroCosto> {
    return await this.centroCostoRepository.findOne({ where: { centro_costo_id: id } });
  }

  async update(id: number, updateCentroCostoDto: UpdateCentroCostoDto): Promise<CentroCosto> {
    await this.centroCostoRepository.update(id, updateCentroCostoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.centroCostoRepository.delete(id);
  }
}
