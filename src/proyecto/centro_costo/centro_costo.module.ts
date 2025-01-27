import { Module } from '@nestjs/common';
import { CentroCostoService } from './centro_costo.service';
import { CentroCostoController } from './centro_costo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroCosto } from './entities/centro_costo.entity';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([CentroCosto])],
  controllers: [CentroCostoController],
  providers: [CentroCostoService, TokenValidationGuard, TokenValidationStrategy],
  exports: [TypeOrmModule],
})
export class CentroCostoModule {}
