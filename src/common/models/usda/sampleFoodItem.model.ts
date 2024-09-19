import { FoodCategory } from '@/common/models/usda/foodCategory.model.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'sampleFoodItem' })
export class SampleFoodItem {
    fdcId: string;

    datatype?: Nullable<string>;

    description?: Nullable<string>;

    foodClass?: Nullable<string>;

    publicationDate?: Nullable<Date>;

    foodAttributes?: Nullable<Nullable<FoodCategory>[]>;
}
