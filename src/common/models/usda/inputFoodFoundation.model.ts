import { SampleFoodItem } from '@/common/models/usda/sampleFoodItem.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'inputFoodFoundation' })
export class InputFoodFoundation {
    @Field(() => ID)
    id: string;

    @Field(() => String, { nullable: true })
    foodDescription?: Nullable<string>;

    @Field(() => SampleFoodItem, { nullable: true })
    inputFood?: Nullable<SampleFoodItem>;
}
