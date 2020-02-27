import { IState } from 'root/app/state';

export class UserSelectors {
    static userView = (state: IState) => UserSelectors.selectSlice(state).userView;
    static userLoading = (state: IState) => UserSelectors.selectSlice(state).userLoading;
    static logoutProcessing = (state: IState) => UserSelectors.selectSlice(state).logoutProcessing;
    static loginProcessing = (state: IState) => UserSelectors.selectSlice(state).loginProcessing;
    static registrationProcessing = (state: IState) => UserSelectors.selectSlice(state).registrationProcessing;
    static userIsAuthenticated = (state: IState) => UserSelectors.selectSlice(state).userIsAuthenticated;

    private static selectSlice = (state: IState) => state.user;
}
