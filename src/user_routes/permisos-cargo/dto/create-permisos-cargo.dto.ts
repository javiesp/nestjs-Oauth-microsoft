import { IsInt, IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreatePermisosCargoDto {
  @IsBoolean()
  p_leer: boolean;

  @IsBoolean()
  p_escribir: boolean;

  @IsBoolean()
  p_borrar: boolean;

  @IsBoolean()
  p_actualizar: boolean;

  @IsString()
  formulario: string;

  @IsInt()
  cargo_id: number;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}
