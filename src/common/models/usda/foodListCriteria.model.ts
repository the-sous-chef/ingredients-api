import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodListCriteria' })
export class FoodListCriteria {
    dataType?: Nullable<Nullable<string>[]>;

    pageSize?: Nullable<number>;

    pageNumber?: Nullable<number>;

    sortBy?: Nullable<string>;

    sortOrder?: Nullable<string>;
}
