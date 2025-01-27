import { Module } from '@nestjs/common';
import { VehiculoDocLegalService } from './vehiculo_doc_legal.service';
import { VehiculoDocLegalController } from './vehiculo_doc_legal.controller';
import { VehiculoModule } from '../vehiculo/vehiculo.module';
import { VehiculoDocLegal } from './entities/vehiculo_doc_legal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoDocLegal]), VehiculoModule],
  controllers: [VehiculoDocLegalController],
  providers: [VehiculoDocLegalService],
})
export class VehiculoDocLegalModule {}
