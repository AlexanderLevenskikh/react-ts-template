import { connectRoutes } from 'redux-first-router';
import { querySerializer } from 'root/shared/utils/querySerializer';
import { routesMap } from "root/router/constants/map";

const connectRoutesResult = connectRoutes(routesMap, {
    querySerializer,
    notFoundPath: undefined,
});

export const locationReducer = connectRoutesResult.reducer;
export const locationMiddleware = connectRoutesResult.middleware;
export const locationEnhancer = connectRoutesResult.enhancer;
