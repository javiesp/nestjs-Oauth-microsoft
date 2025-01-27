import { PartialType } from '@nestjs/mapped-types';
import { CreateRespuestaFormularioDto } from './create-respuesta_formulario.dto';

export class UpdateRespuestaFormularioDto extends PartialType(CreateRespuestaFormularioDto) {}
