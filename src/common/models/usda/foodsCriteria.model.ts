import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodsCriteria' })
export class FoodsCriteria {
    fdcIds: string;

    format?: Nullable<string>;

    nutrients?: Nullable<Nullable<string>[]>;
}
