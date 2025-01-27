import { PartialType } from '@nestjs/mapped-types';
import { CreateCentroCostoDto } from './create-centro_costo.dto';

export class UpdateCentroCostoDto extends PartialType(CreateCentroCostoDto) {}
