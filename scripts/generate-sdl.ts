import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { writeFile } from 'node:fs/promises';
import { SDL_GENERATION_OUTPUT_PATH } from '@/constants';
import { IngredientsResolver } from '@/modules/ingredients/integredients.resolver';

const RESOLVERS = [IngredientsResolver];

async function generateSchema() {
    const app = await NestFactory.create(GraphQLSchemaBuilderModule);

    await app.init();

    const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
    const schema = await gqlSchemaFactory.create(RESOLVERS);

    if (schema) {
        await writeFile(SDL_GENERATION_OUTPUT_PATH, printSchema(schema));
    }
}

generateSchema();
