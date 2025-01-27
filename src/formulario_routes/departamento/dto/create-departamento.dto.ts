import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateDepartamentoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre_departamento: string;

  @IsOptional()
  @IsString()
  created_at?: string;

  @IsOptional()
  @IsString()
  updated_at?: string;
}