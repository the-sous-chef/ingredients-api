import { FoodSearchCriteria } from '@/common/models/usda/foodSearchCriteria.model.js';
import { SearchResultFood } from '@/common/models/usda/searchResultFood.model.js';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'searchResult' })
export class SearchResult {
    foodSearchCriteria?: Nullable<FoodSearchCriteria>;

    totalHits?: Nullable<number>;

    currentPage?: Nullable<number>;

    totalPages?: Nullable<number>;

    foods?: Nullable<Nullable<SearchResultFood>[]>;
}
