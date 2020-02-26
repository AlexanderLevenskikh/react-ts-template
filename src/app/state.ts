import { LocationState } from 'redux-first-router';
import { UserState } from "root/user/state";
import { RouterState } from "root/router/state";

export interface IState {
    location: LocationState<string, any>;
    router: RouterState;
    user: UserState;
}
