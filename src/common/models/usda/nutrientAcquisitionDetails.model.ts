import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientAcquisitionDetails' })
export class NutrientAcquisitionDetails {
    @Field(() => Int, { nullable: true })
    sampleUnitId?: Nullable<number>;

    @Field(() => Date, { nullable: true })
    purchaseDate?: Nullable<Date>;

    @Field(() => String, { nullable: true })
    storeCity?: Nullable<string>;

    @Field(() => String, { nullable: true })
    storeState?: Nullable<string>;
}
