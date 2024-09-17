import { FoodCategory } from '@/common/models/usda/foodCategory.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'sampleFoodItem' })
export class SampleFoodItem {
    @Field(() => ID)
    fdcId: string;

    @Field(() => String, { nullable: true })
    datatype?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => String, { nullable: true })
    foodClass?: Nullable<string>;

    @Field(() => Date, { nullable: true })
    publicationDate?: Nullable<Date>;

    @Field(() => [FoodCategory], { nullable: true })
    foodAttributes?: Nullable<Nullable<FoodCategory>[]>;
}
