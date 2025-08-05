// cabin-class.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CabinClassService } from './cabin-class.service';
import { CabinClass } from './cabin-class.entity';
import { CreateCabinClassDto } from './dto/create-cabin-class.dto';
import { UpdateCabinClassDto } from './dto/update-cabin-class.dto';

@Resolver(() => CabinClass)
export class CabinClassResolver {
  constructor(private readonly service: CabinClassService) {}

  @Query(() => [CabinClass])
  getCabinClasses() {
    return this.service.findAll();
  }

  @Query(() => CabinClass, { nullable: true })
  getCabinClass(@Args('id', { type: () => Int }) id: number) {
    return this.service.findOne(id);
  }

  @Mutation(() => CabinClass)
  createCabinClass(@Args('input') input: CreateCabinClassDto) {
    return this.service.create(input);
  }

  @Mutation(() => CabinClass, { nullable: true })
  updateCabinClass(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: UpdateCabinClassDto,
  ) {
    return this.service.update(id, input);
  }

  @Mutation(() => Boolean)
  async deleteCabinClass(@Args('id', { type: () => Int }) id: number) {
    const result = await this.service.remove(id);
    return result?.message === 'Cabin class deleted';
  }
}
