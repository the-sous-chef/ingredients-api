import { MeasureUnit } from '@/common/models/usda/measureUnit.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodPortion' })
export class FoodPortion {
    id: string;

    amount?: Nullable<number>;

    dataPoints?: Nullable<number>;

    gramWeight?: Nullable<number>;

    minYearAcquired?: Nullable<number>;

    modifier?: Nullable<string>;

    portionDescription?: Nullable<string>;

    sequenceNumber?: Nullable<number>;

    measureUnit?: Nullable<MeasureUnit>;
}
