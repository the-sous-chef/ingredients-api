import { Query, Resolver } from '@nestjs/graphql';
import { Nutrient } from '@/common/models/database/nutrient.model';
import { NutrientsService } from '@/modules/nutrients/services/nutrients.service';

// This resolver is only valid when we start using the database as the primary source of information.

@Resolver((of) => Nutrient)
export class NutrientsResolver {
    constructor(private readonly nutrientsService: NutrientsService) {}

    @Query(() => [Nutrient])
    async ingredients(): Promise<Nutrient[]> {
        throw new Error('Not implemented');
    }

    @Query(() => Nutrient)
    async ingredient(id: string): Promise<Nutrient> {
        throw new Error('Not implemented');
    }
}
