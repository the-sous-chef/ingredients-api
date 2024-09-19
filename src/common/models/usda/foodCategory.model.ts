import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodCategory' })
export class FoodCategory {
    id: string;

    code?: Nullable<string>;

    description?: Nullable<string>;
}
