import { PartialType } from '@nestjs/mapped-types';
import { CreateCSolicitudVehiculoDto } from './create-c_solicitud_vehiculo.dto';

export class UpdateCSolicitudVehiculoDto extends PartialType(CreateCSolicitudVehiculoDto) {}
