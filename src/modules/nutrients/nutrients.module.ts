import { Module } from '@nestjs/common';
import { DateScalar } from '@/common/scalars/date.scalar';

@Module({
    providers: [DateScalar],
})
export class NutrientsModule {}
