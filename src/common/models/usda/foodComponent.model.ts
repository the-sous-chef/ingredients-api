import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodComponent' })
export class FoodComponent {
    id: string;

    name?: Nullable<string>;

    dataPoints?: Nullable<number>;

    gramWeight?: Nullable<number>;

    isRefuse?: Nullable<boolean>;

    minYearAcquired?: Nullable<number>;

    percentWeight?: Nullable<number>;
}
