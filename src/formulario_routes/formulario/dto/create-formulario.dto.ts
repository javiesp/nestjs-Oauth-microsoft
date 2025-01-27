import { IsInt, IsOptional, IsString, MaxLength, IsDate, IsNotEmpty } from 'class-validator';

export class CreateFormularioDto {
  @IsOptional()
  @IsInt()
  tipo_formulario_id?: number;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  codigo_formulario?: string;

  @IsOptional()
  @IsInt()
  revision?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  nombre_form?: string;

  @IsOptional()
  @IsDate()
  fecha_creacion?: string;

  @IsOptional()
  @IsInt()
  departamento_id?: number;
}
