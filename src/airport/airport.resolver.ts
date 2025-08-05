// src/airport/airport.resolver.ts

import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AirportService } from './airport.service';
import { Airport } from './airport.entity';
import { CreateAirportDto } from './dto/create-airport.dto';
import { UpdateAirportDto } from './dto/update-airport.dto';


@Resolver(() => Airport)
export class AirportResolver {
  constructor(private readonly airportService: AirportService) {}

  @Query(() => [Airport])
  airports() {
    return this.airportService.findAll(); // handled async internally
  }

  @Query(() => Airport, { nullable: true })
  airport(@Args('id', { type: () => Int }) id: number) {
    return this.airportService.findOne(id);
  }

  @Mutation(() => Airport)
  createAirport(@Args('input') input: CreateAirportDto) {
    return this.airportService.create(input);
  }

  @Mutation(() => Airport, { nullable: true })
  updateAirport(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateAirportDto,
  ) {
    return this.airportService.update(id, input);
  }

  @Mutation(() => String)
  deleteAirport(@Args('id', { type: () => Int }) id: number) {
    return this.airportService.remove(id).then(res => res.message);
  }
}
