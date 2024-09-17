import { Module } from '@nestjs/common';
import { RootController } from './modules/root/root.controller';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { IngredientsModule } from '@/modules/ingredients/ingredients.module';
import { SDL_GENERATION_OUTPUT_PATH } from '@/constants';
import { NutrientsModule } from '@/modules/nutrients/nutrients.module';
import { IngredientsService } from '@/modules/ingredients/services/ingredients.service';
import { NutrientsService } from '@/modules/nutrients/services/nutrients.service';
import { UsdaService } from '@/modules/services/usda.service';
import { DatabaseService } from '@/modules/services/database.service';

@Module({
    imports: [
        IngredientsModule,
        NutrientsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            introspection: true,
            driver: ApolloDriver,
            playground: false,
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            autoSchemaFile: SDL_GENERATION_OUTPUT_PATH,
            sortSchema: true,
        }),
    ],
    controllers: [RootController],
    providers: [UsdaService, DatabaseService, IngredientsService, NutrientsService],
})
export class AppModule {}
