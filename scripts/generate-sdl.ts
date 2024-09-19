import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { writeFile } from 'node:fs/promises';
import { SDL_GENERATION_OUTPUT_PATH } from '@/constants.js';
import { IngredientsResolver } from '@/modules/ingredients/integredients.resolver.js';
// import { NutrientsResolver } from '@/modules/nutrients/nutrients.resolver.js';
import { SortOrderScalar } from '@/common/scalars/sortOrder.scalar.js';
import { UsdaDataTypeScalar } from '@/common/scalars/usdaDataType.scalar.js';
import { UsdaSortByScalar } from '@/common/scalars/usdaSortBy.scalar.js';
import { DateScalar } from '@/common/scalars/date.scalar.js';

const RESOLVERS = [IngredientsResolver];
const SCALARS = [DateScalar, SortOrderScalar, UsdaDataTypeScalar, UsdaSortByScalar];

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);

    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create(RESOLVERS, SCALARS);

    if (schema) {
        await writeFile(SDL_GENERATION_OUTPUT_PATH, printSchema(schema));
    }
}

generateSchema();
