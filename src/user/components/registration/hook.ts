import { useDispatch, useSelector } from 'react-redux';
import { IUserRegistrationModel } from 'root/user/types/registration';
import { UserActions } from 'root/user/actions';
import { UserSelectors } from 'root/user/selectors';

export function useUserRegistrationForm() {
    const loading = useSelector(UserSelectors.registrationProcessing);

    const dispatch = useDispatch();
    const register = (model: IUserRegistrationModel) => {
        dispatch(UserActions.RegisterUser({ model }));
    };

    return {
        loading,
        register,
    };
}
