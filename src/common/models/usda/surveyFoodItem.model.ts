import { FoodAttribute } from '@/common/models/usda/foodAttribute.model';
import { FoodPortion } from '@/common/models/usda/foodPortion.model';
import { InputFoodSurvey } from '@/common/models/usda/inputFoodSurvey.model';
import { WweiaFoodCategory } from '@/common/models/usda/wweiaFoodCategory.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'surveyFoodItem' })
export class SurveyFoodItem {
    @Field(() => ID)
    fdcId: string;

    @Field(() => String, { nullable: true })
    datatype?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => String, { nullable: true })
    endDate?: Nullable<Date>;

    @Field(() => String, { nullable: true })
    foodClass?: Nullable<string>;

    @Field(() => String, { nullable: true })
    foodCode?: Nullable<string>;

    @Field(() => Date, { nullable: true })
    publicationDate?: Nullable<Date>;

    @Field(() => Date, { nullable: true })
    startDate?: Nullable<Date>;

    @Field(() => String, { nullable: true })
    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;

    @Field(() => [FoodPortion], { nullable: true })
    foodPortions?: Nullable<Nullable<FoodPortion>[]>;

    @Field(() => [InputFoodSurvey], { nullable: true })
    inputFoods?: Nullable<Nullable<InputFoodSurvey>[]>;

    @Field(() => WweiaFoodCategory, { nullable: true })
    wweiaFoodCategory?: Nullable<WweiaFoodCategory>;
}
