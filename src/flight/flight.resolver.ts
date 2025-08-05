import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FlightService } from './flight.service';
import { Flight } from './flight.entity';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';

@Resolver(() => Flight)
export class FlightResolver {
  constructor(private readonly flightService: FlightService) {}

  @Query(() => [Flight])
  getAllFlights() {
    return this.flightService.findAll();
  }

  @Query(() => Flight, { nullable: true })
  getFlight(@Args('id', { type: () => Int }) id: number) {
    return this.flightService.findOne(id);
  }

  @Mutation(() => Flight)
  createFlight(@Args('input') input: CreateFlightDto) {
    return this.flightService.create(input);
  }

  @Mutation(() => Flight)
  async updateFlight(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateFlightDto,
  ) {
    return this.flightService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteFlight(@Args('id', { type: () => Int }) id: number) {
    const result = await this.flightService.delete(id);
    return result.message.includes('Deleted 1');
  }
}
