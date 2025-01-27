import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './entities/cargo.entity';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo)
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  async create(createCargoDto: CreateCargoDto): Promise<Cargo> {
    const cargo = this.cargoRepository.create(createCargoDto);
    return await this.cargoRepository.save(cargo);
  }

  async findAll(page: number, limit: number): Promise<Cargo[]> {
    const currentPage = page;
    const pageSize = limit;

    return await this.cargoRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(cargo_id: number) {
    return await this.cargoRepository.findOne({ where: { cargo_id: cargo_id } });
  }

  async update(cargo_id: number, updateCargoDto: UpdateCargoDto){
    await this.cargoRepository.update(cargo_id, updateCargoDto);
    return this.cargoRepository.findOne({ where: { cargo_id: cargo_id } });
  }

  async remove(id: number): Promise<void> {
    await this.cargoRepository.delete(id);
  }
}
