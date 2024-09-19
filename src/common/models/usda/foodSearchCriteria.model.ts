import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodSearchCriteria' })
export class FoodSearchCriteria {
    query?: Nullable<Nullable<string>[]>;

    pageSize?: Nullable<number>;

    pageNumber?: Nullable<number>;

    sortBy?: Nullable<string>;

    sortOrder?: Nullable<string>;

    brandOwner?: Nullable<string>;

    tradeChannel?: Nullable<Nullable<string>[]>;

    startDate?: Nullable<Date>;

    endDate?: Nullable<Date>;
}
