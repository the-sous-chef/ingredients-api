import { SampleFoodItem } from '@/common/models/usda/sampleFoodItem.model.js';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'inputFoodFoundation' })
export class InputFoodFoundation {
    id: string;

    foodDescription?: Nullable<string>;

    inputFood?: Nullable<SampleFoodItem>;
}
