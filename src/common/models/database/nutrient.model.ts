import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { NutrientMeta } from '@/common/models/database/nutrientMeta.model.js';
import { FoodNutrient } from '@/common/models/usda/foodNutrient.model.js';

@ObjectType({ description: 'nutrient' })
export class Nutrient {
    @Field((type) => ID)
    id: string;

    @Field((type) => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field((type) => String, { nullable: true })
    number?: Nullable<string>;

    @Field((type) => String, { nullable: true })
    name?: Nullable<string>;

    @Field((type) => String, { nullable: true })
    unitName?: Nullable<string>;

    @Field((type) => NutrientMeta)
    meta: NutrientMeta;

    public static createFromUsda(data: FoodNutrient): Nutrient {
        const nutrient = new Nutrient();

        nutrient.id = crypto.randomUUID();
        nutrient.amount = data.amount;
        nutrient.number = data.nutrient.number;
        nutrient.name = data.nutrient.name;
        nutrient.unitName = data.nutrient.unitName;
        nutrient.meta = NutrientMeta.createFromUsda(data);

        return nutrient;
    }
}
