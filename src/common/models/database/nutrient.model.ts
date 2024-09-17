import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { NutrientMeta } from '@/common/models/database/nutrientMeta.model';
import { FoodNutrient } from '@/common/models/usda/foodNutrient.model';

@ObjectType({ description: 'nutrient' })
export class Nutrient {
    @Field(() => ID)
    id: string;

    @Field(() => Int, { nullable: true })
    amount?: Nullable<number>;

    @Field(() => String, { nullable: true })
    number?: Nullable<string>;

    @Field(() => String, { nullable: true })
    name?: Nullable<string>;

    @Field(() => String, { nullable: true })
    unitName?: Nullable<string>;

    @Field(() => NutrientMeta)
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
