import { IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateAircraftDto {
  @IsOptional()
  @Field({ nullable: true })
  aircraftName?: string;

  @Field({ nullable: true })
  @IsOptional()
  aircraftImage?: string; // updated only if needed
}
