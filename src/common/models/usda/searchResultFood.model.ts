import { FoodNutrient } from '@/common/models/usda/foodNutrient.model.js';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'searchResultFood' })
export class SearchResultFood {
    fdcId: string;

    dataType?: Nullable<string>;

    description?: Nullable<string>;

    foodCode?: Nullable<string>;

    foodNutrients?: Nullable<Nullable<FoodNutrient>[]>;

    publicationDate?: Nullable<Date>;

    scientificName?: Nullable<string>;

    brandOwner?: Nullable<string>;

    gtinUpc?: Nullable<string>;

    ingredients?: Nullable<string>;

    ndbNumber?: Nullable<number>;

    additionalDescriptions?: Nullable<string>;

    allHighlightFields?: Nullable<string>;

    score?: Nullable<number>;
}
