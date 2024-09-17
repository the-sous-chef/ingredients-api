import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodNutrientSource' })
export class FoodNutrientSource {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    code?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;
}
