import { combineReducers } from 'redux';
import { IState } from 'root/app/state';
import { locationReducer } from 'root/app/router';
import { routerReducer } from "root/router/reducer";
import { userReducer } from 'root/user/reducer';

export const reducer = combineReducers<IState>({
    location: locationReducer,
    router: routerReducer,
    user: userReducer,
});
