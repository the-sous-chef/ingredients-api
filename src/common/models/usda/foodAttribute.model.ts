import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodAttribute' })
export class FoodAttribute {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    sequenceNumber?: Nullable<number>;

    @Field(() => String, { nullable: true })
    value?: Nullable<string>;
}
