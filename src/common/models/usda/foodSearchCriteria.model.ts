import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodSearchCriteria' })
export class FoodSearchCriteria {
    @Field(() => [String], { nullable: true })
    query?: Nullable<Nullable<string>[]>;

    @Field(() => Int, { nullable: true })
    pageSize?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    pageNumber?: Nullable<number>;

    @Field(() => String, { nullable: true })
    sortBy?: Nullable<string>;

    @Field(() => String, { nullable: true })
    sortOrder?: Nullable<string>;

    @Field(() => String, { nullable: true })
    brandOwner?: Nullable<string>;

    @Field(() => [String], { nullable: true })
    tradeChannel?: Nullable<Nullable<string>[]>;

    @Field(() => Date, { nullable: true })
    startDate?: Nullable<Date>;

    @Field(() => Date, { nullable: true })
    endDate?: Nullable<Date>;
}
