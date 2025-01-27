import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { Vehiculo } from './entities/vehiculo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculoController],
  providers: [VehiculoService, TokenValidationGuard, TokenValidationStrategy],
  exports: [TypeOrmModule],
})
export class VehiculoModule {}
