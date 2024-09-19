import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrientSource' })
export class FoodNutrientSource {
    id: string;

    code?: Nullable<string>;

    description?: Nullable<string>;
}
