import { FoodNutrient } from '@/common/models/usda/foodNutrient.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'searchResultFood' })
export class SearchResultFood {
    @Field(() => ID)
    fdcId: string;

    @Field(() => String, { nullable: true })
    dataType?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => String, { nullable: true })
    foodCode?: Nullable<string>;

    @Field(() => FoodNutrient, { nullable: true })
    foodNutrients?: Nullable<Nullable<FoodNutrient>[]>;

    @Field(() => Date, { nullable: true })
    publicationDate?: Nullable<Date>;

    @Field(() => String, { nullable: true })
    scientificName?: Nullable<string>;

    @Field(() => String, { nullable: true })
    brandOwner?: Nullable<string>;

    @Field(() => String, { nullable: true })
    gtinUpc?: Nullable<string>;

    @Field(() => String, { nullable: true })
    ingredients?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    ndbNumber?: Nullable<number>;

    @Field(() => String, { nullable: true })
    additionalDescriptions?: Nullable<string>;

    @Field(() => String, { nullable: true })
    allHighlightFields?: Nullable<string>;

    @Field(() => String, { nullable: true })
    score?: Nullable<number>;
}
