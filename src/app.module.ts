import { Module } from '@nestjs/common';
import { RootController } from '@/modules/root/root.controller.js';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { IngredientsModule } from '@/modules/ingredients/ingredients.module.js';
import { SDL_GENERATION_OUTPUT_PATH } from '@/constants.js';
// import { NutrientsModule } from '@/modules/nutrients/nutrients.module.js';
import { UsdaService } from '@/modules/services/usda.service.js';
import { DatabaseService } from '@/modules/services/database.service.js';
import { UsdaDataTypeScalar } from '@/common/scalars/usdaDataType.scalar.js';
import { UsdaSortByScalar } from '@/common/scalars/usdaSortBy.scalar.js';
import { SortOrderScalar } from '@/common/scalars/sortOrder.scalar.js';

@Module({
    imports: [
        IngredientsModule,
        // NutrientsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            introspection: true,
            driver: ApolloDriver,
            playground: false,
            // @ts-expect-error
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            autoSchemaFile: SDL_GENERATION_OUTPUT_PATH,
            sortSchema: true,
            resolvers: {
                UsdaDataType: UsdaDataTypeScalar,
                UsdaSortBy: UsdaSortByScalar,
                SortOrder: SortOrderScalar,
            },
        }),
    ],
    controllers: [RootController],
    providers: [UsdaService, DatabaseService],
})
export class AppModule {}
