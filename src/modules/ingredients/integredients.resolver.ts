import { Args, Query, Resolver } from '@nestjs/graphql';
import { Ingredient } from '@/common/models/database/ingredient.model.js';
import { IngredientsService } from '@/modules/ingredients/services/ingredients.service.js';
import { IngredientsArgs } from '@/modules/ingredients/dto/ingredients.args.js';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => Ingredient)
export class IngredientsResolver {
    constructor(private readonly ingredientsService: IngredientsService) {}

    @Query((returns) => [Ingredient])
    async ingredients(@Args() args: IngredientsArgs): Promise<Ingredient[]> {
        return this.ingredientsService.findAll(args);
    }

    @Query((returns) => Ingredient)
    async ingredient(id: string): Promise<Ingredient> {
        const result = this.ingredientsService.findById(id);

        if (!result) {
            throw new NotFoundException(id);
        }

        return result;
    }
}
