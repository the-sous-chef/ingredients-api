import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientAcquisitionDetails' })
export class NutrientAcquisitionDetails {
    sampleUnitId?: Nullable<number>;

    purchaseDate?: Nullable<Date>;

    storeCity?: Nullable<string>;

    storeState?: Nullable<string>;
}
