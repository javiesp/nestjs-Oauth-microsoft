import { IsInt, IsOptional, IsDateString, IsString } from 'class-validator';

export class CreateRespuestaFormularioDto {
  
  @IsOptional()
  @IsInt()
  formulario_id?: number;

  @IsOptional()
  @IsInt()
  user_id?: number;

  @IsOptional()
  @IsInt()
  vehiculo_id?: number;

  @IsOptional()
  @IsInt()
  Instrumento_id?: number;

  @IsOptional()
  @IsDateString()
  fecha_respuesta?: string;

  @IsOptional()
  @IsInt()
  proyecto_id?: number;

  @IsOptional()
  @IsInt()
  estado_id?: number;
}
