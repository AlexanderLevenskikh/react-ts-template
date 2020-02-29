import { SearchParamsModel } from 'root/shared/types/searchParams';
import { querySerializer } from 'root/shared/utils/querySerializer';

export function areQueryParamsEqual(first: SearchParamsModel, second: SearchParamsModel) {
    const firstSerialized = querySerializer.stringify(first);
    const secondSerialized = querySerializer.stringify(second);

    return firstSerialized === secondSerialized;
}
