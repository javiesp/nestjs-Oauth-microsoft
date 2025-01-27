import { Module } from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoController } from './proyecto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { CentroCostoModule } from '../centro_costo/centro_costo.module';
import { TipoProyectoModule } from '../tipo_proyecto/tipo_proyecto.module';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto]), CentroCostoModule, TipoProyectoModule],
  controllers: [ProyectoController],
  providers: [ProyectoService],
  exports: [TypeOrmModule],
})
export class ProyectoModule {}
