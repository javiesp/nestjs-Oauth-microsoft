import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehiculo } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {

  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    const vehiculo = this.vehiculoRepository.create(createVehiculoDto);
    return await this.vehiculoRepository.save(vehiculo);
  }

  async findAll(page, limit): Promise<Vehiculo[]> {
    const currentPage = page;
    const pageSize = limit;

    return await this.vehiculoRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(vehiculo_id: number): Promise<Vehiculo> {
    return await this.vehiculoRepository.findOne({ where: { vehiculo_id: vehiculo_id } });
  }

  async update(id: number, updateVehiculoDto: UpdateVehiculoDto): Promise<Vehiculo> {
    await this.vehiculoRepository.update(id, updateVehiculoDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vehiculoRepository.delete(id);
  }
}
