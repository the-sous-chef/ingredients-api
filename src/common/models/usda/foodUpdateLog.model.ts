import { FoodAttribute } from '@/common/models/usda/foodAttribute.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodUpdateLog' })
export class FoodUpdateLog {
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

    brandedFoodCategory?: Nullable<string>;

    changes?: Nullable<string>;

    foodAttributes?: Nullable<Nullable<FoodAttribute>[]>;
}
