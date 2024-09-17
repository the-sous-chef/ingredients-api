import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'labelNutrients' })
export class LabelNutrients {
    @Field(() => Int, { nullable: true })
    fat?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    saturatedFat?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    transFat?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    cholesterol?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    sodium?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    carbohydrates?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    fiber?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    sugars?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    protein?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    calcium?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    iron?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    potassium?: Nullable<number>;

    @Field(() => Int, { nullable: true })
    calories?: Nullable<number>;
}
