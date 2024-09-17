import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'retentionFactor' })
export class RetentionFactor {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    code?: Nullable<number>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;
}
