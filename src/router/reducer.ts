import { ActionType } from 'typesafe-actions';
import { RouterState } from 'root/router/state';

const initialState: RouterState = new RouterState();
const routerActions = {
};
type ReducerActions = ActionType<typeof routerActions>;

export const routerReducer = (state = initialState, action: ReducerActions): RouterState => {
    switch (action.type) {
        default:
            return state;
    }
};
