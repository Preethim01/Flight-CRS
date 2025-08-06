
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MarkupService } from './markup.service';
import { Markup } from './markup.entity';
import { CreateMarkupDto } from './dto/create-markup.dto';
import { UpdateMarkupDto } from './dto/update-markup.dto';

@Resolver(() => Markup)
export class MarkupResolver {
  constructor(private readonly markupService: MarkupService) {}

  @Mutation(() => Markup)
createMarkup(@Args('createMarkupInput') createMarkupInput: CreateMarkupDto) {
  return this.markupService.create(createMarkupInput);  
}


  @Query(() => [Markup], { name: 'getAllMarkups' })
  async findAll(): Promise<Markup[]> {
    return this.markupService.findAll();
  }

  @Query(() => Markup, { name: 'getMarkupById' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<Markup> {
    return this.markupService.findOne(id);
  }

  @Mutation(() => Markup)
  async updateMarkup(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateMarkupInput') updateMarkupInput: UpdateMarkupDto,
  ): Promise<Markup> {
    return this.markupService.update(id, updateMarkupInput);
  }

  @Mutation(() => String)
  async deleteMarkup(@Args('id', { type: () => Int }) id: number): Promise<string> {
    await this.markupService.delete(id);
    return 'Deleted successfully';
  }

//   @Query(() => Markup, { name: 'getCurrentMarkup' })
//   async getCurrentMarkup(): Promise<Markup> {
//     const { type, amount } = await this.markupService.getCurrentMarkup();
//     return {  amount };
//   }
}
