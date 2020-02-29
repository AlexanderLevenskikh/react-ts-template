import { SearchParamsModel } from 'root/shared/types/searchParams';
import { querySerializer } from 'root/shared/utils/querySerializer';

export function areQueryParamsEmpty(params: SearchParamsModel) {
    const pagingParams = new SearchParamsModel(params.current, params.take);
    const paramsSerialized = querySerializer.stringify(params);
    const pagingParamsSerialized = querySerializer.stringify(pagingParams);

    return paramsSerialized === pagingParamsSerialized;
}
