import { IsOptional, IsString, IsInt, IsDateString } from 'class-validator';

export class CreateVehiculoDocLegalDto {

  @IsOptional()
  @IsDateString()
  venc_permiso_circulacion?: string;

  @IsOptional()
  @IsDateString()
  venc_revision_tecnica?: string;

  @IsInt()
  vehiculo_id: number;

}
