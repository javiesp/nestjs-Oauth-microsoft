import { Module } from '@nestjs/common';
import { PermisosCargoService } from './permisos-cargo.service';
import { PermisosCargoController } from './permisos-cargo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisosCargo } from './entities/permisos-cargo.entity';
import { TokenValidationGuard } from '../../auth/strategies/microsoft-oauth/token-validation.guard';
import { TokenValidationStrategy } from '../../auth/strategies/microsoft-oauth/token-validation.strategy';

@Module({
  imports: [TypeOrmModule.forFeature([PermisosCargo])],
  controllers: [PermisosCargoController],
  providers: [PermisosCargoService, TokenValidationGuard, TokenValidationStrategy],
})
export class PermisosCargoModule {}
