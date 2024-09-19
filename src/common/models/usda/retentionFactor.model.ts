import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'retentionFactor' })
export class RetentionFactor {
    id: string;

    code?: Nullable<number>;

    description?: Nullable<string>;
}
