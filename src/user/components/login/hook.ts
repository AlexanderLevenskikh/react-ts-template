import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from 'root/user/actions';
import { UserSelectors } from 'root/user/selectors';
import { IUserLoginModel } from 'root/user/types/login';

export function useUserLoginForm() {
    const loading = useSelector(UserSelectors.registrationProcessing);

    const dispatch = useDispatch();
    const login = (model: IUserLoginModel) => {
        dispatch(UserActions.LoginUser({ model }));
    };

    return {
        loading,
        login,
    };
}
