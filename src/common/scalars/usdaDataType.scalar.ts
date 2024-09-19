import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

export type UsdaDataType = 'Branded' | 'Foundation' | 'Survey (FNDDS)' | 'SR Legacy';

@Scalar('UsdaDataType', (type) => String)
export class UsdaDataTypeScalar implements CustomScalar<string, UsdaDataType> {
    description = 'USDA data type enum. Can be "Branded", "Foundation", "SR Legacy", or "Survey (FNDDS)"';

    parseValue(value: UsdaDataType): UsdaDataType {
        return value;
    }

    serialize(value: UsdaDataType): string {
        return value;
    }

    parseLiteral(ast: any): UsdaDataType {
        if (
            ast.kind === Kind.STRING &&
            (ast.value === 'Branded' ||
                ast.value === 'Foundation' ||
                ast.value === 'Survey (FNDDS)' ||
                ast.value === 'SR Legacy')
        ) {
            return ast.value;
        }
        return null;
    }
}
