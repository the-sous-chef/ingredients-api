import { FoodAttribute } from '@/common/models/usda/foodAttribute.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodUpdateLog' })
export class FoodUpdateLog {
    @Field(() => ID)
    fdcId: string;

    @Field(() => Date, { nullable: true })
    availableDate?: Nullable<Date>;

    @Field(() => String, { nullable: true })
    brandOwner?: Nullable<string>;

    @Field(() => String, { nullable: true })
    dataSource?: Nullable<string>;

    @Field(() => String, { nullable: true })
    dataType?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => String, { nullable: true })
    foodClass?: Nullable<string>;

    @Field(() => String, { nullable: true })
    gtinUpc?: Nullable<string>;

    @Field(() => String, { nullable: true })
    householdServingFullText?: Nullable<string>;

    @Field(() => String, { nullable: true })
    ingredients?: Nullable<string>;

    @Field(() => Date, { nullable: true })
    modifiedDate?: Nullable<Date>;

    @Field(() => Date, { nullable: true })
    publicationDate?: Nullable<Date>;

    @Field(() => Int, { nullable: true })
    servingSize?: Nullable<number>;

    @Field(() => String, { nullable: true })
    servingSizeUnit?: Nullable<string>;

    @Field(() => String, { nullable: true })
    brandedFoodCategory?: Nullable<string>;

    @Field(() => String, { nullable: true })
    changes?: Nullable<string>;

    @Field(() => [FoodAttribute], { nullable: true })
    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;
}
