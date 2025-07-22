import { PartialType } from '@nestjs/mapped-types';
import { CreateCabinClassDto } from './create-cabin-class.dto';

export class UpdateCabinClassDto extends PartialType(CreateCabinClassDto) {}
