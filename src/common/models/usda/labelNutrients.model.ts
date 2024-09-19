import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'labelNutrients' })
export class LabelNutrients {
    fat?: Nullable<number>;

    saturatedFat?: Nullable<number>;

    transFat?: Nullable<number>;

    cholesterol?: Nullable<number>;

    sodium?: Nullable<number>;

    carbohydrates?: Nullable<number>;

    fiber?: Nullable<number>;

    sugars?: Nullable<number>;

    protein?: Nullable<number>;

    calcium?: Nullable<number>;

    iron?: Nullable<number>;

    potassium?: Nullable<number>;

    calories?: Nullable<number>;
}
