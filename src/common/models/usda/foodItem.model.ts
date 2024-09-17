import { FoodAttribute } from '@/common/models/usda/foodAttribute.model';
import { FoodCategory } from '@/common/models/usda/foodCategory.model';
import { FoodComponent } from '@/common/models/usda/foodComponent.model';
import { FoodNutrient } from '@/common/models/usda/foodNutrient.model';
import { FoodPortion } from '@/common/models/usda/foodPortion.model';
import { FoodUpdateLog } from '@/common/models/usda/foodUpdateLog.model';
import { InputFoodFoundation } from '@/common/models/usda/inputFoodFoundation.model';
import { LabelNutrients } from '@/common/models/usda/labelNutrients.model';
import { NutrientConversionFactors } from '@/common/models/usda/nutrientConversionFactors.model';
import { WweiaFoodCategory } from '@/common/models/usda/wweiaFoodCategory.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodItem' })
export class FoodItem {
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
    preparationStateCode?: Nullable<string>;

    @Field(() => String, { nullable: true })
    brandedFoodCategory?: Nullable<string>;

    @Field(() => [String], { nullable: true })
    tradeChannel?: Nullable<Nullable<string>[]>;

    @Field(() => Int, { nullable: true })
    gpcClassCode?: Nullable<number>;

    @Field(() => [FoodNutrient], { nullable: true })
    foodNutrients?: Nullable<Nullable<FoodNutrient>[]>;

    @Field(() => [FoodUpdateLog], { nullable: true })
    foodUpdateLog?: Nullable<Nullable<FoodUpdateLog>[]>;

    @Field(() => LabelNutrients, { nullable: true })
    labelNutrients?: Nullable<LabelNutrients>;

    @Field(() => String, { nullable: true })
    footNote?: Nullable<string>;

    @Field(() => Boolean, { nullable: true })
    isHistoricalReference?: Nullable<boolean>;

    @Field(() => Int, { nullable: true })
    ndbNumber?: Nullable<number>;

    @Field(() => String, { nullable: true })
    scientificName?: Nullable<string>;

    @Field(() => FoodCategory, { nullable: true })
    foodCategory?: Nullable<FoodCategory>;

    @Field(() => [FoodComponent], { nullable: true })
    foodComponents?: Nullable<Nullable<FoodComponent>[]>;

    @Field(() => [FoodPortion], { nullable: true })
    foodPortions?: Nullable<Nullable<FoodPortion>[]>;

    @Field(() => [InputFoodFoundation], { nullable: true })
    inputFoods?: Nullable<Nullable<InputFoodFoundation>[]>;

    @Field(() => [NutrientConversionFactors], { nullable: true })
    nutrientConversionFactors?: Nullable<Nullable<NutrientConversionFactors>[]>;

    @Field(() => String, { nullable: true })
    foodCode?: Nullable<string>;

    @Field(() => Date, { nullable: true })
    endDate?: Nullable<Date>;

    @Field(() => Date, { nullable: true })
    startDate?: Nullable<Date>;

    @Field(() => [FoodAttribute], { nullable: true })
    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;

    @Field(() => WweiaFoodCategory, { nullable: true })
    wweiaFoodCategory?: Nullable<WweiaFoodCategory>;
}
