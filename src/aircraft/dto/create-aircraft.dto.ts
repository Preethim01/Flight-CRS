import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAircraftDto {
  @Field()
  aircraftName: string;

  @Field()
  aircraftImage: string; 
}
