import { Module } from '@nestjs/common';
import { CSolicitudBodegaService } from './c_solicitud_bodega.service';
import { CSolicitudBodegaController } from './c_solicitud_bodega.controller';
import { TokenValidationGuard } from '../../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../../auth/strategies/microsoft-oauth/token-validation.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CSolicitudBodega } from './entities/c_solicitud_bodega.entity';
import { RespuestaFormularioModule } from '../../respuesta_formulario/respuesta_formulario.module';

@Module({
  imports: [TypeOrmModule.forFeature([CSolicitudBodega]), RespuestaFormularioModule],
  controllers: [CSolicitudBodegaController],
  providers: [CSolicitudBodegaService, TokenValidationGuard, TokenValidationStrategy],
  exports: [TypeOrmModule],
})
export class CSolicitudBodegaModule {}
