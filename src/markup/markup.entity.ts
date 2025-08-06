
import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


export enum MarkupType {
  FIXED = 'fixed',
  PERCENT = 'percent',
}


registerEnumType(MarkupType, {
  name: 'MarkupType',
});

@ObjectType()
@Entity()
export class Markup {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => MarkupType)
  @Column({
    type: 'enum',
    enum: MarkupType,
  })
  markupType: MarkupType;

  @Field()
  @Column('float') 
  amount: number;
}
