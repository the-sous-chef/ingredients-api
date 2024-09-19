import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

export type UsdaSortBy = 'dataType.keyword' | 'lowercaseDescription.keyword' | 'fdcId' | 'publishedDate';

@Scalar('UsdaSortByScalar', (type) => String)
export class UsdaSortByScalar implements CustomScalar<string, UsdaSortBy> {
    description =
        'USDA sort by enum. Can be one of "dataType.keyword", "fdcId", "lowercaseDescription.keyword", or "publishedDate"';

    parseValue(value: UsdaSortBy): UsdaSortBy {
        return value;
    }

    serialize(value: UsdaSortBy): string {
        return value;
    }

    parseLiteral(ast: any): UsdaSortBy {
        if (
            ast.kind === Kind.STRING &&
            (ast.value === 'dataType.keyword' ||
                ast.value === 'fdcId' ||
                ast.value === 'lowercaseDescription.keyword' ||
                ast.value === 'publishedDate')
        ) {
            return ast.value;
        }
        return null;
    }
}
