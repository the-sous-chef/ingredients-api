import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'measureUnit' })
export class MeasureUnit {
    id: string;

    abbreviation?: Nullable<string>;

    name?: Nullable<string>;
}
