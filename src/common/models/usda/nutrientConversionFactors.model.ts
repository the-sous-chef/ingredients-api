import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientConversionFactors' })
export class NutrientConversionFactors {
    type?: Nullable<string>;

    value?: Nullable<number>;
}
