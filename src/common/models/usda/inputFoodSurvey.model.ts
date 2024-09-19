import { RetentionFactor } from '@/common/models/usda/retentionFactor.model.js';
import { SurveyFoodItem } from '@/common/models/usda/surveyFoodItem.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'inputFoodSurvey' })
export class InputFoodSurvey {
    id: string;

    amount?: Nullable<number>;

    foodDescription?: Nullable<string>;

    ingredientCode?: Nullable<number>;

    ingredientDescription?: Nullable<string>;

    ingredientWeight?: Nullable<number>;

    portionCode?: Nullable<string>;

    portionDescription?: Nullable<string>;

    sequenceNumber?: Nullable<number>;

    surveyFlag?: Nullable<number>;

    unit?: Nullable<string>;

    inputFood?: Nullable<SurveyFoodItem>;

    retentionFactor?: Nullable<RetentionFactor>;
}
