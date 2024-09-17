import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ingredient } from '@/common/models/database/ingredient.model';
import { IngredientsService } from '@/modules/ingredients/services/ingredients.service';
import { DataType as UsdaDataType, SortBy as UsdaSortBy, UsdaService } from '@/modules/services/usda.service';
import { IngredientsArgs } from '@/modules/ingredients/dto/ingredients.input';

@Resolver((of) => Ingredient)
export class IngredientsResolver {
    constructor(private readonly ingredientsService: IngredientsService) {}

    @Query(() => [Ingredient])
    async ingredients(@Args() args: IngredientsArgs): Promise<Ingredient[]> {
        return this.ingredientsService.findAll(args);
    }

    @Query(() => Ingredient)
    async ingredient(id: string): Promise<Ingredient> {
        return this.ingredientsService.findById(id);
    }
}
