import { IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCabinClassDto {
  @Field()
  @IsOptional()
  @IsString()
  name?: string;
}
