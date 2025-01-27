import { Module } from '@nestjs/common';
import { CSolicitudVehiculoService } from './c_solicitud_vehiculo.service';
import { CSolicitudVehiculoController } from './c_solicitud_vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CSolicitudVehiculo } from './entities/c_solicitud_vehiculo.entity';
import { TokenValidationGuard } from '../../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../../auth/strategies/microsoft-oauth/token-validation.strategy';
import { RespuestaFormularioModule } from '../../respuesta_formulario/respuesta_formulario.module';

@Module({
  imports: [TypeOrmModule.forFeature([CSolicitudVehiculo]), RespuestaFormularioModule],
  controllers: [CSolicitudVehiculoController],
  providers: [CSolicitudVehiculoService, TokenValidationGuard, TokenValidationStrategy],
})
export class CSolicitudVehiculoModule {}
