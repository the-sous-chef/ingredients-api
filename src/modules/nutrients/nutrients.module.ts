import { NutrientsResolver } from '@/modules/nutrients/nutrients.resolver.js';
import { NutrientsService } from '@/modules/nutrients/services/nutrients.service.js';
import { Module } from '@nestjs/common';

@Module({
    providers: [NutrientsResolver, NutrientsService],
})
export class NutrientsModule {}
