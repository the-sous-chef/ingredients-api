import { FoodItem } from '@/common/models/usda/foodItem.model';
import { SearchResultFood } from '@/common/models/usda/searchResultFood.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'ingredientMeta' })
export class IngredientMeta {
    @Field(() => ID)
    usdaId: string;

    public static createFromUsda(data: FoodItem | SearchResultFood): IngredientMeta {
        const meta = new IngredientMeta();

        meta.usdaId = data.fdcId.toString();

        return meta;
    }
}
