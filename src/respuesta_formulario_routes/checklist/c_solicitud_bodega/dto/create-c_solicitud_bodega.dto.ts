import { IsOptional, IsString, IsDateString, MaxLength, IsInt } from 'class-validator';

export class CreateCSolicitudBodegaDto {
  @IsOptional()
  @IsDateString()
  fecha_solicitud: string;

  @IsOptional()
  @IsDateString()
  fecha_entrega_equipo: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  autorizado_por: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  estado: string;

  @IsOptional()
  @IsInt()
  respuesta_formulario_id: number;
}
