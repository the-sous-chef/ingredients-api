import crypto from 'node:crypto';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IngredientMeta } from '@/common/models/database/ingredientMeta.model.js';
import { Nutrient } from '@/common/models/database/nutrient.model.js';
import { FoodItem } from '@/common/models/usda/foodItem.model.js';
import { SearchResultFood } from '@/common/models/usda/searchResultFood.model.js';

@ObjectType({ description: 'ingredient' })
export class Ingredient {
    @Field((type) => ID)
    id: string;

    @Field((type) => IngredientMeta)
    meta: IngredientMeta;

    @Field((type) => String, { nullable: true })
    brandOwner?: Nullable<string>;

    @Field((type) => String, { nullable: true })
    description?: Nullable<string>;

    @Field((type) => String, { nullable: true })
    gtinUpc?: Nullable<string>;

    @Field((type) => Int, { nullable: true })
    servingSize?: Nullable<number>;

    @Field((type) => String, { nullable: true })
    servingSizeUnit?: Nullable<string>;

    @Field((type) => [Nutrient], { nullable: true })
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
