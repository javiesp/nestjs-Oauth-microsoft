import { PartialType } from '@nestjs/mapped-types';
import { CreateCSolicitudBodegaDto } from './create-c_solicitud_bodega.dto';

export class UpdateCSolicitudBodegaDto extends PartialType(CreateCSolicitudBodegaDto) {}
