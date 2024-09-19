import { NutrientAcquisitionDetails } from '@/common/models/usda/nutrientAcquisitionDetails.model.js';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientAnalysisDetails' })
export class NutrientAnalysisDetails {
    subSampleId?: Nullable<number>;

    amount?: Nullable<number>;

    nutrientId?: Nullable<number>;

    labMethodDescription?: Nullable<string>;

    labMethodOriginalDescription?: Nullable<string>;

    labMethodLink?: Nullable<string>;

    labMethodTechnique?: Nullable<string>;

    nutrientAcquisitionDetails?: Nullable<Nullable<NutrientAcquisitionDetails>[]>;
}
