import { IngredientsResolver } from '@/modules/ingredients/integredients.resolver.js';
import { IngredientsService } from '@/modules/ingredients/services/ingredients.service.js';
import { Module } from '@nestjs/common';

@Module({
    providers: [IngredientsResolver, IngredientsService],
})
export class IngredientsModule {}
