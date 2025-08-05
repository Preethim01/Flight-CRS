
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Flight {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  flightNumber: string;

  @Field()
  @Column()
  origin: string;

  @Field()
  @Column()
  destination: string;


}