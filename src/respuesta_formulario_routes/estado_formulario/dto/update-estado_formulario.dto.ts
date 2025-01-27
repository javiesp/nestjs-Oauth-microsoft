import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadoFormularioDto } from './create-estado_formulario.dto';

export class UpdateEstadoFormularioDto extends PartialType(CreateEstadoFormularioDto) {}
