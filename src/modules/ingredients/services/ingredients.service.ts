import { Injectable } from '@nestjs/common';
import { Ingredient } from '@/common/models/database/ingredient.model.js';
import { DatabaseService } from '@/modules/services/database.service.js';
import { UsdaService } from '@/modules/services/usda.service.js';
import { type UsdaDataType } from '@/common/scalars/usdaDataType.scalar.js';
import { type UsdaSortBy } from '@/common/scalars/usdaSortBy.scalar.js';
import { type SortOrder } from '@/common/scalars/sortOrder.scalar.js';

export type FindAllInput = {
    query?: string;
    dataType?: UsdaDataType[];
    pageSize?: number;
    pageNumber?: number;
    sortBy?: UsdaSortBy;
    sortOrder?: SortOrder;
    brandOwner?: string;
};

// I want to slowly transfer information about ingredients from the external APIs to the database
// for the information I care about. Long-term I have no desire to solely rely on external sources
// for data as that presents a risk for the business if the source goes down or changes their API,
// especially since USDA has severe request limits.
// This implies that we'll need a full and partial ingest job. Once that's in place, switch over
// to using the database as the primary source of information.
@Injectable()
export class IngredientsService {
    constructor(
        private readonly usdaService: UsdaService,
        private readonly databaseService: DatabaseService,
    ) {}

    async findAll(input: FindAllInput): Promise<Ingredient[]> {
        const result = await this.usdaService.search(input);

        return result.foods.map((food) => Ingredient.createFromUsda(food));
    }

    async findById(id: string): Promise<Ingredient> {
        const data = await this.usdaService.food(id);

        return Ingredient.createFromUsda(data);
    }

    async patch(id: string, ingredient: Partial<Ingredient>): Promise<Ingredient> {
        throw new Error('Not implemented');
    }

    async delete(id: string): Promise<void> {
        throw new Error('Not implemented');
    }
}
