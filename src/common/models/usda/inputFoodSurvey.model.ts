import { RetentionFactor } from '@/common/models/usda/retentionFactor.model';
import { SurveyFoodItem } from '@/common/models/usda/surveyFoodItem.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'inputFoodSurvey' })
export class InputFoodSurvey {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field(() => String, { nullable: true })
    foodDescription?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    ingredientCode?: Nullable<number>;

    @Field(() => String, { nullable: true })
    ingredientDescription?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    ingredientWeight?: Nullable<number>;

    @Field(() => String, { nullable: true })
    portionCode?: Nullable<string>;

    @Field(() => String, { nullable: true })
    portionDescription?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    sequenceNumber?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    surveyFlag?: Nullable<number>;

    @Field(() => String, { nullable: true })
    unit?: Nullable<string>;

    @Field(() => SurveyFoodItem, { nullable: true })
    inputFood?: Nullable<SurveyFoodItem>;

    @Field(() => RetentionFactor, { nullable: true })
    retentionFactor?: Nullable<RetentionFactor>;
}
