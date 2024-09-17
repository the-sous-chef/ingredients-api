import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrient' })
export class Nutrient {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    number?: Nullable<string>;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    rank?: Nullable<number>;

    @Field(() => String, { nullable: true })
    unitName?: Nullable<string>;
}
