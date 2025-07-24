import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCabinClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
