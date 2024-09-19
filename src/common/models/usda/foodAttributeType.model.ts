import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodAttributeType' })
export class FoodAttributeType {
    id: string;

    name?: Nullable<string>;

    description?: Nullable<string>;
}
