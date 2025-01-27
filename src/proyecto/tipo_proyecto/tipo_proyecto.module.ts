import { Module } from '@nestjs/common';
import { TipoProyectoService } from './tipo_proyecto.service';
import { TipoProyectoController } from './tipo_proyecto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProyecto } from './entities/tipo_proyecto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoProyecto])],
  controllers: [TipoProyectoController],
  providers: [TipoProyectoService],
  exports: [TypeOrmModule],
})
export class TipoProyectoModule {}
