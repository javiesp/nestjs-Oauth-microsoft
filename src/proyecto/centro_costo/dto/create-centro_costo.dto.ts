import { IsString, IsInt, IsOptional, MaxLength } from 'class-validator';

export class CreateCentroCostoDto {

  @IsString()
  @MaxLength(50)
  nombre_centro: string;

  @IsInt()
  @IsOptional()
  cuenta_analitica_id?: string;

  @IsInt()
  @IsOptional()
  balance?: number;
}
