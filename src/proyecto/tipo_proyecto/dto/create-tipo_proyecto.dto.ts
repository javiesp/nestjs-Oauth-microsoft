import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateTipoProyectoDto {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  tipo_proyecto?: string;
}

