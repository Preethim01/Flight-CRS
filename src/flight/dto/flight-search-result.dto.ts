import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class FlightSearchResultDto {
 @Field({ nullable: true })

  flightNumber: string;
  origin: string;
  destination: string;
  aircraftName: string;
  totalFare: number;
}
