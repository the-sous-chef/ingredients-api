import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'wweiaFoodCategory' })
export class WweiaFoodCategory {
    @Field(() => Int, { nullable: true })
    wweiaFoodCategoryCode: Nullable<number> | undefined;

    @Field(() => String, { nullable: true })
    wweiaFoodCategoryDescription: Nullable<string> | undefined;
}
