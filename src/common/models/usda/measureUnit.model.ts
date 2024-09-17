import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'measureUnit' })
export class MeasureUnit {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    abbreviation?: Nullable<string>;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;
}
