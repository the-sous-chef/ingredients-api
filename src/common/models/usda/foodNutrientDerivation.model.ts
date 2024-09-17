import { FoodNutrientSource } from '@/common/models/usda/foodNutrientSource.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrientDerivation' })
export class FoodNutrientDerivation {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    code?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => FoodNutrientSource, { nullable: true })
    foodNutrientSource?: Nullable<FoodNutrientSource>;
}
