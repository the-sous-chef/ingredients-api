import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrient' })
export class Nutrient {
    id: string;

    number?: Nullable<string>;

    name?: Nullable<string>;

    rank?: Nullable<number>;

    unitName?: Nullable<string>;
}
