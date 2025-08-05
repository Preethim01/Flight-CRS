// src/aircraft/aircraft.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AircraftService } from './aircraft.service';
import { Aircraft } from './aircraft.entity';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';

@Resolver(() => Aircraft)
export class AircraftResolver {
  constructor(private readonly aircraftService: AircraftService) {}

  @Query(() => [Aircraft], { name: 'aircrafts' }) // ✅ This is required!
  findAllAircrafts() {
    return this.aircraftService.findAll();
  }

  @Query(() => Aircraft, { nullable: true })
  getAircraft(@Args('id', { type: () => Int }) id: number) {
    return this.aircraftService.findOne(id);
  }

  @Mutation(() => Aircraft)
createAircraft(@Args('input') input: CreateAircraftDto): Promise<Aircraft> {
  return this.aircraftService.create(input);
}


  @Mutation(() => Aircraft, { nullable: true })
  updateAircraft(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAircraftDto') dto: UpdateAircraftDto,
  ) {
    return this.aircraftService.update(id, dto);
  }
}
