import ky from 'ky';
import querystring from 'node:querystring';
import { Injectable } from '@nestjs/common';
import { FoodItem } from '@/common/models/usda/foodItem.model.js';
import { SearchResult } from '@/common/models/usda/searchResult.model.js';
import { type UsdaSortBy } from '@/common/scalars/usdaSortBy.scalar.js';
import { type SortOrder } from '@/common/scalars/sortOrder.scalar.js';
import { type UsdaDataType } from '@/common/scalars/usdaDataType.scalar.js';

// 'https://api.nal.usda.gov/fdc';

export type Format = 'abridged' | 'full';

export type ListParameters = {
    dataType?: UsdaDataType[];
    pageSize?: number;
    pageNumber?: number;
    sortBy?: UsdaSortBy;
    sortOrder?: SortOrder;
};

export type FoodParameters = {
    format?: Format;
    nutrients?: number[];
};

export type FoodsParameters = {
    fdcIds: number[];
    format?: Format;
    nutrients?: number[];
};

export type SearchParameters = {
    query?: string;
    dataType?: UsdaDataType[];
    pageSize?: number;
    pageNumber?: number;
    sortBy?: UsdaSortBy;
    sortOrder?: SortOrder;
    brandOwner?: string;
};

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    accept: 'application/json',
};

const AUTH_QUERY_STRING = {
    api_key: process.env.USDA_API_KEY,
};

const DEFAULT_LIST_PARAMETERS: ListParameters = {
    pageSize: 50,
};

const DEFAULT_FOOD_PARAMETERS: FoodParameters = {
    format: 'full',
};

const DEFAULT_FOODS_PARAMETERS: Omit<FoodsParameters, 'fdcIds'> = {
    format: 'full',
};

const DEFAULT_SEARCH_PARAMETERS: SearchParameters = {
    query: '*',
    pageSize: 50,
};

const LIST_URL_FRAGMENT = '/foods/list';

const FOODS_URL_FRAGMENT = '/foods';

const FOOD_URL_FRAGMENT = '/food/';

const SEARCH_URL_FRAGMENT = '/foods/search';

function toSearchParams(params: Record<string, any>) {
    return querystring.stringify({
        ...params,
        ...AUTH_QUERY_STRING,
    });
}

@Injectable()
export class UsdaService {
    private api = ky.extend({
        prefixUrl: process.env.USDA_API_BASE_URL,
        headers: DEFAULT_HEADERS,
    });

    async *list(params: ListParameters = DEFAULT_LIST_PARAMETERS) {
        return this.api
            .get(LIST_URL_FRAGMENT, {
                searchParams: toSearchParams(params),
            })
            .json<FoodItem[]>();
    }

    async food(id: string, params: FoodParameters = DEFAULT_FOOD_PARAMETERS) {
        return this.api
            .get(FOOD_URL_FRAGMENT + id, {
                searchParams: toSearchParams(params),
            })
            .json<FoodItem>();
    }

    async foods(params: FoodsParameters) {
        const paramsWithDefaults = {
            ...DEFAULT_FOODS_PARAMETERS,
            ...params,
        };

        return this.api
            .get(FOODS_URL_FRAGMENT, {
                searchParams: toSearchParams(paramsWithDefaults),
            })
            .json<FoodItem[]>();
    }

    async search(params: SearchParameters) {
        const paramsWithDefaults = {
            ...DEFAULT_SEARCH_PARAMETERS,
            ...params,
        };

        return this.api
            .get(SEARCH_URL_FRAGMENT, {
                searchParams: toSearchParams(paramsWithDefaults),
            })
            .json<SearchResult>();
    }
}
