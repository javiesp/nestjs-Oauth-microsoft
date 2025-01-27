import { Module } from '@nestjs/common';
import { RespuestaFormularioService } from './respuesta_formulario.service';
import { RespuestaFormularioController } from './respuesta_formulario.controller';
import { RespuestaFormulario } from './entities/respuesta_formulario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormularioModule } from '../../formulario_routes/formulario/formulario.module'
import { UserModule } from '../../user_routes/user/user.module'
import { VehiculoModule } from '../../bodega_routes/vehiculo/vehiculo.module'
import { InstrumentoModule } from '../../bodega_routes/instrumento/instrumento.module'
import { ProyectoModule } from '../../proyecto/proyecto/proyecto.module'
import { EstadoFormularioModule } from '../estado_formulario/estado_formulario.module';


@Module({
  imports: [TypeOrmModule.forFeature([RespuestaFormulario]), FormularioModule, UserModule, VehiculoModule, InstrumentoModule, ProyectoModule, EstadoFormularioModule ],
  controllers: [RespuestaFormularioController],
  providers: [RespuestaFormularioService],
  exports: [TypeOrmModule],
})
export class RespuestaFormularioModule {}
