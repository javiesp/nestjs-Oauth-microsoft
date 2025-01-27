import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehiculoDocLegal } from './entities/vehiculo_doc_legal.entity';
import { CreateVehiculoDocLegalDto } from './dto/create-vehiculo_doc_legal.dto';
import { UpdateVehiculoDocLegalDto } from './dto/update-vehiculo_doc_legal.dto';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity'

@Injectable()
export class VehiculoDocLegalService {
  constructor(
    @InjectRepository(VehiculoDocLegal)
    private readonly vehiculoDocLegalRepository: Repository<VehiculoDocLegal>,

    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ) {}

  async create(createVehiculoDocLegalDto: CreateVehiculoDocLegalDto): Promise<VehiculoDocLegal> {
    const { vehiculo_id, ...docLegalData } = createVehiculoDocLegalDto;

    // Verificar si el vehículo existe
    const vehiculo = await this.vehiculoRepository.findOne({ where: { vehiculo_id } });
    if (!vehiculo) {
      throw new Error('Vehículo no encontrado');
    }

    const vehiculoDocLegal = this.vehiculoDocLegalRepository.create({
      ...docLegalData,
      vehiculo_id: vehiculo,
    });

    return await this.vehiculoDocLegalRepository.save(vehiculoDocLegal);
  }

  async findAll(page: number, limit: number): Promise<VehiculoDocLegal[]> {
    return await this.vehiculoDocLegalRepository.find({
      relations: ['vehiculo_id'],
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: number): Promise<VehiculoDocLegal> {
    const docLegal = await this.vehiculoDocLegalRepository.findOne({
      where: { doc_legal_id: id },
      relations: ['vehiculo_id'],
    });
    return docLegal;
  }

  async update(id: number, updateVehiculoDocLegalDto: UpdateVehiculoDocLegalDto): Promise<VehiculoDocLegal> {
    const docLegal = await this.vehiculoDocLegalRepository.findOne({
      where: { doc_legal_id: id },
      relations: ['vehiculo_id'],
    });

    if (!docLegal) {
      throw new Error('Documento legal no encontrado');
    }

    // Verificar si el campo vehiculo_id se actualiza y si el vehículo existe
    if (updateVehiculoDocLegalDto.vehiculo_id) {
      const vehiculo = await this.vehiculoRepository.findOne({
        where: { vehiculo_id: updateVehiculoDocLegalDto.vehiculo_id },
      });
      if (!vehiculo) {
        throw new Error('Vehículo no encontrado');
      }
      docLegal.vehiculo_id = vehiculo;
    }

    Object.assign(docLegal, updateVehiculoDocLegalDto);
    await this.vehiculoDocLegalRepository.save(docLegal);

    return docLegal;
  }

  async remove(id: number): Promise<void> {
    await this.vehiculoDocLegalRepository.delete(id);
  }
}
