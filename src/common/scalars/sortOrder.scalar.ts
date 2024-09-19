import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

export type SortOrder = 'asc' | 'desc';

@Scalar('SortOrder', (type) => String)
export class SortOrderScalar implements CustomScalar<string, SortOrder> {
    description = 'Sort order enum. Can be "asc" or "desc"';

    parseValue(value: SortOrder): SortOrder {
        return value;
    }

    serialize(value: SortOrder): string {
        return value;
    }

    parseLiteral(ast: ValueNode): SortOrder {
        if (ast.kind === Kind.STRING && (ast.value === 'asc' || ast.value === 'desc')) {
            return ast.value;
        }
        return null;
    }
}
