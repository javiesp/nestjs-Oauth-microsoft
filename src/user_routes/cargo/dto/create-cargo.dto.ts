import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class CreateCargoDto {

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsInt()
  @IsOptional()
  departamentoId?: number;

  @IsDateString()
  @IsOptional()
  createdAt?: string;

  @IsDateString()
  @IsOptional()
  updatedAt?: string;

}
