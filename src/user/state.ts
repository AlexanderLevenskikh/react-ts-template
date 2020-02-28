import { UserView } from 'root/user/types/user';
import { localStorageUserKey } from 'root/app/constants';

export class UserState {
    userView: UserView = new UserView();
    userLoading: boolean = false;
    userIsAuthenticated: boolean = Boolean(localStorage.getItem(localStorageUserKey));

    loginProcessing: boolean = false;
    registrationProcessing: boolean = false;
    logoutProcessing: boolean = false;
}
