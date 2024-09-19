import { FoodNutrientDerivation } from '@/common/models/usda/foodNutrientDerivation.model.js';
import { Nutrient } from '@/common/models/usda/nutrient.model.js';
import { NutrientAnalysisDetails } from '@/common/models/usda/nutrientAnalysisDetails.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrient' })
export class FoodNutrient {
    id: string;

    number?: Nullable<number>;

    name?: Nullable<string>;

    amount?: Nullable<number>;

    unitName?: Nullable<string>;

    derivationCode?: Nullable<string>;

    derivationDescription?: Nullable<string>;

    dataPoints?: Nullable<number>;

    min?: Nullable<number>;

    max?: Nullable<number>;

    median?: Nullable<number>;

    type?: Nullable<string>;

    nutrient?: Nullable<Nutrient>;

    foodNutrientDerivation?: Nullable<FoodNutrientDerivation>;

    nutrientAnalysisDetails?: Nullable<NutrientAnalysisDetails>;
}
