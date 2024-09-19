import { FoodAttribute } from '@/common/models/usda/foodAttribute.model.js';
import { FoodCategory } from '@/common/models/usda/foodCategory.model.js';
import { FoodComponent } from '@/common/models/usda/foodComponent.model.js';
import { FoodNutrient } from '@/common/models/usda/foodNutrient.model.js';
import { FoodPortion } from '@/common/models/usda/foodPortion.model.js';
import { FoodUpdateLog } from '@/common/models/usda/foodUpdateLog.model.js';
import { InputFoodFoundation } from '@/common/models/usda/inputFoodFoundation.model.js';
import { LabelNutrients } from '@/common/models/usda/labelNutrients.model.js';
import { NutrientConversionFactors } from '@/common/models/usda/nutrientConversionFactors.model.js';
import { WweiaFoodCategory } from '@/common/models/usda/wweiaFoodCategory.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodItem' })
export class FoodItem {
    fdcId: string;

    availableDate?: Nullable<Date>;

    brandOwner?: Nullable<string>;

    dataSource?: Nullable<string>;

    dataType?: Nullable<string>;

    description?: Nullable<string>;

    foodClass?: Nullable<string>;

    gtinUpc?: Nullable<string>;

    householdServingFullText?: Nullable<string>;

    ingredients?: Nullable<string>;

    modifiedDate?: Nullable<Date>;

    publicationDate?: Nullable<Date>;

    servingSize?: Nullable<number>;

    servingSizeUnit?: Nullable<string>;

    preparationStateCode?: Nullable<string>;

    brandedFoodCategory?: Nullable<string>;

    tradeChannel?: Nullable<Nullable<string>[]>;

    gpcClassCode?: Nullable<number>;

    foodNutrients?: Nullable<Nullable<FoodNutrient>[]>;

    foodUpdateLog?: Nullable<Nullable<FoodUpdateLog>[]>;

    labelNutrients?: Nullable<LabelNutrients>;

    footNote?: Nullable<string>;

    isHistoricalReference?: Nullable<boolean>;

    ndbNumber?: Nullable<number>;

    scientificName?: Nullable<string>;

    foodCategory?: Nullable<FoodCategory>;

    foodComponents?: Nullable<Nullable<FoodComponent>[]>;

    foodPortions?: Nullable<Nullable<FoodPortion>[]>;

    inputFoods?: Nullable<Nullable<InputFoodFoundation>[]>;

    nutrientConversionFactors?: Nullable<Nullable<NutrientConversionFactors>[]>;

    foodCode?: Nullable<string>;

    endDate?: Nullable<Date>;

    startDate?: Nullable<Date>;

    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;

    wweiaFoodCategory?: Nullable<WweiaFoodCategory>;
}
