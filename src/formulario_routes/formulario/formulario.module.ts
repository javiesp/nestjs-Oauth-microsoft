import { Module } from '@nestjs/common';
import { FormularioService } from './formulario.service';
import { FormularioController } from './formulario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formulario } from './entities/formulario.entity';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';
import { DepartamentoModule } from '../departamento/departamento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Formulario]), DepartamentoModule],
  controllers: [FormularioController],
  providers: [FormularioService, TokenValidationGuard, TokenValidationStrategy],
  exports: [TypeOrmModule],
})
export class FormularioModule {}
