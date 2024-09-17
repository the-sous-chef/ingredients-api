import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodsCriteria' })
export class FoodsCriteria {
    @Field(() => [ID])
    fdcIds: string;

    @Field(() => String, { nullable: true })
    format?: Nullable<string>;

    @Field(() => [String], { nullable: true })
    nutrients?: Nullable<Nullable<string>[]>;
}
