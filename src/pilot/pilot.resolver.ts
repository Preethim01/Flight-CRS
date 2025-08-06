
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PilotService } from './pilot.service';
import { Pilot } from './pilot.entity';
import { CreatePilotDto } from './dto/create-pilot.dto';
import { UpdatePilotDto } from './dto/update-pilot.dto';

@Resolver(() => Pilot)
export class PilotResolver {
  constructor(private readonly pilotService: PilotService) {}

  @Query(() => [Pilot])
  getAllPilots() {
    return this.pilotService.findAll();
  }

  @Query(() => Pilot, { nullable: true })
  getPilot(@Args('id', { type: () => Int }) id: number) {
    return this.pilotService.findOne(id);
  }

  @Mutation(() => Pilot)
  createPilot(@Args('input') input: CreatePilotDto) {
    return this.pilotService.create(input);
  }

  @Mutation(() => Pilot)
  updatePilot(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdatePilotDto,
  ) {
    return this.pilotService.update(id, input);
  }

  @Mutation(() => Boolean)
  async deletePilot(@Args('id', { type: () => Int }) id: number) {
    const result = await this.pilotService.remove(id);
    return result.message === 'Pilot deleted successfully';
  }
}
