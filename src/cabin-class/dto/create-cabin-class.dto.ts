import { IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCabinClassDto {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
}
