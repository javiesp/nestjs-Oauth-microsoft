import { Module } from '@nestjs/common';
import { HistorialFormularioService } from './historial_formulario.service';
import { HistorialFormularioController } from './historial_formulario.controller';
import { FormularioModule } from '../formulario/formulario.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialFormulario } from './entities/historial_formulario.entity';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialFormulario]), FormularioModule],
  controllers: [HistorialFormularioController],
  providers: [HistorialFormularioService, TokenValidationGuard, TokenValidationStrategy],
})
export class HistorialFormularioModule {}
