import { ArgsType, Field, Int } from '@nestjs/graphql';
import { DataType as UsdaDataType, SortBy as UsdaSortBy, SortOrder } from '@/modules/services/usda.service';

@ArgsType()
export class IngredientsArgs {
    @Field(() => String, { nullable: true })
    query?: string;

    @Field({ nullable: true })
    dataType?: UsdaDataType[];

    @Field(() => Int, { nullable: true })
    pageSize?: number;

    @Field(() => Int, { nullable: true })
    pageNumber?: number;

    @Field({ nullable: true })
    sortBy?: UsdaSortBy;

    @Field({ nullable: true })
    sortOrder?: SortOrder;

    @Field(() => String, { nullable: true })
    brandOwner?: string;
}
