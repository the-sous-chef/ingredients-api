import { NutrientAcquisitionDetails } from '@/common/models/usda/nutrientAcquisitionDetails.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientAnalysisDetails' })
export class NutrientAnalysisDetails {
    @Field(() => Int, { nullable: true })
    subSampleId?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    nutrientId?: Nullable<number>;

    @Field(() => String, { nullable: true })
    labMethodDescription?: Nullable<string>;

    @Field(() => String, { nullable: true })
    labMethodOriginalDescription?: Nullable<string>;

    @Field(() => String, { nullable: true })
    labMethodLink?: Nullable<string>;

    @Field(() => String, { nullable: true })
    labMethodTechnique?: Nullable<string>;

    @Field(() => [NutrientAcquisitionDetails], { nullable: true })
    nutrientAcquisitionDetails?: Nullable<Nullable<NutrientAcquisitionDetails>[]>;
}
