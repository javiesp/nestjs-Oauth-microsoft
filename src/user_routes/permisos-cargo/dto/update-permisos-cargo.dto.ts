import { PartialType } from '@nestjs/mapped-types';
import { CreatePermisosCargoDto } from './create-permisos-cargo.dto';

export class UpdatePermisosCargoDto extends PartialType(CreatePermisosCargoDto) {}
