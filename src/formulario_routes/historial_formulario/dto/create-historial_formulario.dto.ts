import { IsInt, IsOptional, IsString, MaxLength, IsDateString } from 'class-validator';

export class CreateHistorialFormularioDto {

  @IsOptional()
  @IsInt()
  formulario_id?: number;

  @IsOptional()
  @IsDateString()
  fecha_modificacion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  descripcion_cambio?: string;
}
