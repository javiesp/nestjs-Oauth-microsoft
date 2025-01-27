import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculoDocLegalDto } from './create-vehiculo_doc_legal.dto';

export class UpdateVehiculoDocLegalDto extends PartialType(CreateVehiculoDocLegalDto) {}
