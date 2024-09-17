import { Injectable } from '@nestjs/common';
import { Nutrient } from '@/common/models/database/nutrient.model';
import { DatabaseService } from '@/modules/services/database.service';

// This service is only valid when we start using the database as the primary source of information.

@Injectable()
export class NutrientsService {
    constructor(private readonly databaseService: DatabaseService) {}

    async findAll(): Promise<Nutrient[]> {
        throw new Error('Not implemented');
    }

    async findById(id: string): Promise<Nutrient> {
        throw new Error('Not implemented');
    }

    async patch(id: string, ingredient: Partial<Nutrient>): Promise<Nutrient> {
        throw new Error('Not implemented');
    }

    async delete(id: string): Promise<void> {
        throw new Error('Not implemented');
    }
}
