import { type SortOrder } from '@/common/scalars/sortOrder.scalar.js';
import { type UsdaDataType } from '@/common/scalars/usdaDataType.scalar.js';
import { type UsdaSortBy } from '@/common/scalars/usdaSortBy.scalar.js';
import { ArgsType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class IngredientsArgs {
    @IsOptional()
    query?: string;

    @IsOptional()
    dataType?: UsdaDataType[];

    @IsOptional()
    pageSize?: number;

    @IsOptional()
    pageNumber?: number;

    @IsOptional()
    sortBy?: UsdaSortBy;

    @IsOptional()
    sortOrder?: SortOrder;

    @IsOptional()
    brandOwner?: string;
}
