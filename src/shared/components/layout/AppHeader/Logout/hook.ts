import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { UserActions } from 'root/user/actions';

export function useAppHeaderLogout() {
    const dispatch = useDispatch();
    const logout = useCallback(
        () => dispatch(UserActions.Logout()),
        [ dispatch ],
    );

    return {
        logout,
    }
}
