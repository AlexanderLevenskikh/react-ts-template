import { UserView } from 'root/user/types/user';
import { JwtUtils } from 'root/shared/utils/jwt';

export class UserState {
    userView: UserView = new UserView();
    userLoading: boolean = false;
    userIsAuthenticated: boolean = JwtUtils.isAuthenticated();

    loginProcessing: boolean = false;
    registrationProcessing: boolean = false;
    logoutProcessing: boolean = false;
}
