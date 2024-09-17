import { MeasureUnit } from '@/common/models/usda/measureUnit.model';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'foodPortion' })
export class FoodPortion {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    dataPoints?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    gramWeight?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    minYearAcquired?: Nullable<number>;

    @Field(() => String, { nullable: true })
    modifier?: Nullable<string>;

    @Field(() => String, { nullable: true })
    portionDescription?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    sequenceNumber?: Nullable<number>;

    @Field(() => MeasureUnit, { nullable: true })
    measureUnit?: Nullable<MeasureUnit>;
}
