import { FoodNutrient } from '@/common/models/usda/foodNutrient.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'nutrientMeta' })
export class NutrientMeta {
    @Field(() => ID)
    usdaId: string;

    public static createFromUsda(data: FoodNutrient): NutrientMeta {
        const meta = new NutrientMeta();

        meta.usdaId = data.id;

        return meta;
    }
}
