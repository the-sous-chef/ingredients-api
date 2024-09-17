import crypto from 'node:crypto';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IngredientMeta } from '@/common/models/database/ingredientMeta.model';
import { Nutrient } from '@/common/models/database/nutrient.model';
import { FoodItem } from '@/common/models/usda/foodItem.model';
import { SearchResultFood } from '@/common/models/usda/searchResultFood.model';

@ObjectType({ description: 'ingredient' })
export class Ingredient {
    @Field(() => ID)
    id: string;

    @Field(() => IngredientMeta)
    meta: IngredientMeta;

    @Field(() => String, { nullable: true })
    brandOwner?: Nullable<string>;

    @Field(() => String, { nullable: true })
    description?: Nullable<string>;

    @Field(() => String, { nullable: true })
    gtinUpc?: Nullable<string>;

    @Field(() => Int, { nullable: true })
    servingSize?: Nullable<number>;

    @Field(() => String, { nullable: true })
    servingSizeUnit?: Nullable<string>;

    @Field(() => [Nutrient], { nullable: true })
    nutrients?: Nullable<Nullable<Nutrient>[]>;

    public static createFromUsda(data: FoodItem | SearchResultFood): Ingredient {
        const ingredient = new Ingredient();

        ingredient.id = crypto.randomUUID();
        ingredient.meta = IngredientMeta.createFromUsda(data);
        ingredient.brandOwner = data.brandOwner;
        ingredient.description = data.description;
        ingredient.gtinUpc = data.gtinUpc;
        ingredient.servingSize = (data as FoodItem).servingSize;
        ingredient.servingSizeUnit = (data as FoodItem).servingSizeUnit;
        ingredient.nutrients = data.foodNutrients.map((nutrient) => Nutrient.createFromUsda(nutrient));

        return ingredient;
    }
}
