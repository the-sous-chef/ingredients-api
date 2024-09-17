import { FoodSearchCriteria } from '@/common/models/usda/foodSearchCriteria.model';
import { SearchResultFood } from '@/common/models/usda/searchResultFood.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'searchResult' })
export class SearchResult {
    @Field(() => FoodSearchCriteria, { nullable: true })
    foodSearchCriteria?: Nullable<FoodSearchCriteria>;

    @Field(() => Int, { nullable: true })
    totalHits?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    currentPage?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    totalPages?: Nullable<number>;

    @Field(() => [SearchResultFood], { nullable: true })
    foods?: Nullable<Nullable<SearchResultFood>[]>;
}
