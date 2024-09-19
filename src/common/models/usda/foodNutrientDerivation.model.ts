import { FoodNutrientSource } from '@/common/models/usda/foodNutrientSource.model.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrientDerivation' })
export class FoodNutrientDerivation {
    id: string;

    code?: Nullable<string>;

    description?: Nullable<string>;

    foodNutrientSource?: Nullable<FoodNutrientSource>;
}
