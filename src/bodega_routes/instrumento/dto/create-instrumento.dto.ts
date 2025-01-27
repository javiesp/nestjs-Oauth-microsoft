import { IsString, IsOptional, MaxLength, IsDateString } from 'class-validator';

export class CreateInstrumentoDto {

  @IsOptional()
  @IsString()
  @MaxLength(100)
  marca?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  modelo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  n_serie?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  v_customField01?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  v_customField02?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  v_customField03?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  v_customField04?: string;

  @IsOptional()
  @IsDateString()
  created_at?: string;

  @IsOptional()
  @IsDateString()
  updated_at?: string;
}
