import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialFormularioDto } from './create-historial_formulario.dto';

export class UpdateHistorialFormularioDto extends PartialType(CreateHistorialFormularioDto) {}
