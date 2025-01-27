import { IsString, IsOptional, IsDateString, IsInt, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProyectoDto {

  @IsString()
  @MaxLength(100)
  nombre_proyecto: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  @IsOptional()
  fecha_ini?: string;

  @IsDateString()
  @IsOptional()
  fecha_cierre?: string;

  @IsInt()
  @IsOptional()
  type_id?: number;

  @IsInt()
  @IsOptional()
  centro_costo_id?: number;

}
