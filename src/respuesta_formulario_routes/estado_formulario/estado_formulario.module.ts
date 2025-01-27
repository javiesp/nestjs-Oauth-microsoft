import { Module } from '@nestjs/common';
import { EstadoFormularioService } from './estado_formulario.service';
import { EstadoFormularioController } from './estado_formulario.controller';
import { EstadoFormulario } from './entities/estado_formulario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoFormulario])],
  controllers: [EstadoFormularioController],
  providers: [EstadoFormularioService, TokenValidationGuard, TokenValidationStrategy],
  exports: [TypeOrmModule],
})
export class EstadoFormularioModule {}
