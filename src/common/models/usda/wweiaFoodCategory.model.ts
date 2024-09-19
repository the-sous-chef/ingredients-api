import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'wweiaFoodCategory' })
export class WweiaFoodCategory {
    wweiaFoodCategoryCode: Nullable<number> | undefined;

    wweiaFoodCategoryDescription: Nullable<string> | undefined;
}
