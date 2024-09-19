import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodAttribute' })
export class FoodAttribute {
    id: string;

    sequenceNumber?: Nullable<number>;

    value?: Nullable<string>;
}
