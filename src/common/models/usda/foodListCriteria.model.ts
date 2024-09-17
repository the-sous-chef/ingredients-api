import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodListCriteria' })
export class FoodListCriteria {
    @Field(() => [String], { nullable: true })
    dataType?: Nullable<Nullable<string>[]>;

    @Field(() => Int, { nullable: true })
    pageSize?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    pageNumber?: Nullable<number>;

    @Field(() => String, { nullable: true })
    sortBy?: Nullable<string>;

    @Field(() => String, { nullable: true })
    sortOrder?: Nullable<string>;
}
