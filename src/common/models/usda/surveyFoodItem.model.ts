import { FoodAttribute } from '@/common/models/usda/foodAttribute.model.js';
import { FoodPortion } from '@/common/models/usda/foodPortion.model.js';
import { InputFoodSurvey } from '@/common/models/usda/inputFoodSurvey.model.js';
import { WweiaFoodCategory } from '@/common/models/usda/wweiaFoodCategory.model.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'surveyFoodItem' })
export class SurveyFoodItem {
    fdcId: string;

    datatype?: Nullable<string>;

    description?: Nullable<string>;

    endDate?: Nullable<Date>;

    foodClass?: Nullable<string>;

    foodCode?: Nullable<string>;

    publicationDate?: Nullable<Date>;

    startDate?: Nullable<Date>;

    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;

    foodPortions?: Nullable<Nullable<FoodPortion>[]>;

    inputFoods?: Nullable<Nullable<InputFoodSurvey>[]>;

    wweiaFoodCategory?: Nullable<WweiaFoodCategory>;
}
