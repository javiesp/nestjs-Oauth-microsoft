import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoProyectoDto } from './create-tipo_proyecto.dto';

export class UpdateTipoProyectoDto extends PartialType(CreateTipoProyectoDto) {}
