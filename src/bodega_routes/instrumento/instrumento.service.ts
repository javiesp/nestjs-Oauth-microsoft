import { Injectable } from '@nestjs/common';
import { CreateInstrumentoDto } from './dto/create-instrumento.dto';
import { UpdateInstrumentoDto } from './dto/update-instrumento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Instrumento } from './entities/instrumento.entity';

@Injectable()
export class InstrumentoService {
  constructor(
    @InjectRepository(Instrumento)
    private readonly instrumentoRepository: Repository<Instrumento>,
  ) {}

  async create(createInstrumentoDto: CreateInstrumentoDto): Promise<Instrumento> {
    const instrumento = this.instrumentoRepository.create(createInstrumentoDto);
    return await this.instrumentoRepository.save(instrumento);
  }

  async findAll(page, limit): Promise<Instrumento[]> {
    const currentPage = page;
    const pageSize = limit;

    return await this.instrumentoRepository.find({
      skip: (currentPage - 1) * pageSize, 
      take: pageSize,
    });
  }

  async findOne(Instrumento_id: number): Promise<Instrumento> {
    return await this.instrumentoRepository.findOne(
      { where: { Instrumento_id: Instrumento_id } }
    );
  }

  async update(Instrumento_id: number, updateInstrumentoDto: UpdateInstrumentoDto): Promise<Instrumento> {
    await this.instrumentoRepository.update(Instrumento_id, updateInstrumentoDto);
    return await this.instrumentoRepository.findOne(
      { where: { Instrumento_id: Instrumento_id } }
    );
  }

  async remove(Instrumento_id: number): Promise<void> {
    await this.instrumentoRepository.delete(Instrumento_id);
  }
}
