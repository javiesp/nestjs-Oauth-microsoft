import { IsString, IsOptional, IsDateString, IsBoolean, IsInt, MaxLength } from 'class-validator';

export class CreateCSolicitudVehiculoDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  nombre_solicitante: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  cargo_solicitante: string;

  @IsOptional()
  @IsDateString()
  fecha_solicitud: string;

  @IsOptional()
  @IsDateString()
  periodo_uso: string;

  @IsOptional()
  @IsDateString()
  periodo_termino: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  tipo_vehiculo: string;

  @IsOptional()
  @IsString()
  @MaxLength(600)
  motivo_solicitud: string;

  @IsOptional()
  @IsBoolean()
  necesita_chofer: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  conductor_nombre: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  conductor_asignado: string;

  @IsOptional()
  @IsBoolean()
  doc_al_dia: boolean;

  @IsOptional()
  @IsBoolean()
  autorizacion_empresa: boolean;

  @IsOptional()
  @IsInt()
  respuesta_formulario_id: number;
}
