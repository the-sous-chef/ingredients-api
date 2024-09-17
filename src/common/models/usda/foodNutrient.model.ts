import { FoodNutrientDerivation } from '@/common/models/usda/foodNutrientDerivation.model';
import { Nutrient } from '@/common/models/usda/nutrient.model';
import { NutrientAnalysisDetails } from '@/common/models/usda/nutrientAnalysisDetails.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrient' })
export class FoodNutrient {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    number?: Nullable<number>;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field(() => String, { nullable: true })
    unitName?: Nullable<string>;

    @Field(() => String, { nullable: true })
    derivationCode?: Nullable<string>;

    @Field(() => String, { nullable: true })
    derivationDescription?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    dataPoints?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    min?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    max?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    median?: Nullable<number>;

    @Field(() => String, { nullable: true })
    type?: Nullable<string>;

    @Field(() => Nutrient, { nullable: true })
    nutrient?: Nullable<Nutrient>;

    @Field(() => FoodNutrientDerivation, { nullable: true })
    foodNutrientDerivation?: Nullable<FoodNutrientDerivation>;

    @Field(() => NutrientAnalysisDetails, { nullable: true })
    nutrientAnalysisDetails?: Nullable<NutrientAnalysisDetails>;
}
