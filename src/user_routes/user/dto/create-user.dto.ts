import { IsString, IsOptional, IsEmail, IsInt, IsNotEmpty, IsDateString, MaxLength } from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  displayname: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  givenname?: string;

  @IsInt()
  @IsOptional()
  cargo_id?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  mobilephone?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  rut?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  officelocation?: string;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  surname?: string;

  @IsString()
  @IsOptional()
  @MaxLength(100)
  microsoft_id?: string;

  @IsEmail()
  @IsOptional()
  @MaxLength(50)
  mail?: string;

  @IsString()
  @IsOptional()
  @MaxLength(15)
  password?: string;

  @IsOptional()
  firma?: Buffer;

  @IsDateString()
  @IsOptional()
  created_at?: string;

  @IsDateString()
  @IsOptional()
  updated_at?: string;
}
