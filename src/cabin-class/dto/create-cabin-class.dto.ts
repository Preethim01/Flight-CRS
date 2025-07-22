import { IsString } from 'class-validator';

export class CreateCabinClassDto {
  @IsString()
  name: string;
}
