import { IsString, IsOptional, IsInt, IsDateString, MaxLength } from 'class-validator';

export class CreateVehiculoDto {

  @IsOptional()
  @IsString()
  @MaxLength(50)
  marca?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  modelo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  patente?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  color?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  n_serie?: string;

  @IsOptional()
  @IsInt()
  kilometraje?: number;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  tipo_vehiculo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  f_customField01?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  f_customField02?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsDateString()
  updated_at?: string;
}
