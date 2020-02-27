import { UserView } from 'root/user/types/user';

export class UserState {
    userView: UserView = new UserView();
    userLoading: boolean = false;
    userIsAuthenticated: boolean = false;

    loginProcessing: boolean = false;
    registrationProcessing: boolean = false;
    logoutProcessing: boolean = false;
}
