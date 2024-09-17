import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodComponent' })
export class FoodComponent {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    dataPoints?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    gramWeight?: Nullable<number>;

    @Field(() => Boolean, { nullable: true })
    isRefuse?: Nullable<boolean>;

    @Field(() => Int, { nullable: true })
    minYearAcquired?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    percentWeight?: Nullable<number>;
}
