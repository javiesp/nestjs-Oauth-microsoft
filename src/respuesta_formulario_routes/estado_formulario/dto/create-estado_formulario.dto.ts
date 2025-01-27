import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateEstadoFormularioDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  estado?: string;
}
