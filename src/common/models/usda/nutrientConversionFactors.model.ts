import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientConversionFactors' })
export class NutrientConversionFactors {
    @Field(() => String, { nullable: true })
    type?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    value?: Nullable<number>;
}
