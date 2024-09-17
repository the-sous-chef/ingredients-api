import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodAttributeType' })
export class FoodAttributeType {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;
}
