import { ActionType } from 'typesafe-actions';
import { UserActions, UserActionTypes } from 'root/user/actions';
import { UserState } from 'root/user/state';

export const initialState = new UserState();
type ReducerActions = ActionType<typeof UserActions>;

export const userReducer = (state = initialState, action: ReducerActions): UserState => {
    switch (action.type) {
        case UserActionTypes.GetUser: {
            return {
                ...state,
                userLoading: true,
            };
        }
        case UserActionTypes.GetUserSucceed: {
            const { view } = action.payload;

            return {
                ...state,
                userLoading: false,
                userView: view,
            }
        }

        case UserActionTypes.GetUserFailed:  {
            return {
                ...state,
                userLoading: false,
            }
        }

        case UserActionTypes.LoginUser: {
            return {
                ...state,
                loginProcessing: true,
            };
        }
        case UserActionTypes.LoginUserSucceed: {
            return {
                ...state,
                loginProcessing: false,
            }
        }

        case UserActionTypes.LoginUserFailed:  {
            return {
                ...state,
                loginProcessing: false,
            }
        }

        case UserActionTypes.Logout: {
            return {
                ...state,
                logoutProcessing: true,
            };
        }
        case UserActionTypes.LogoutSucceed: {
            return {
                ...state,
                logoutProcessing: false,
            }
        }

        case UserActionTypes.LogoutFailed:  {
            return {
                ...state,
                logoutProcessing: false,
            }
        }

        case UserActionTypes.RegisterUser: {
            return {
                ...state,
                registrationProcessing: true,
            };
        }

        case UserActionTypes.RegisterUserSucceed: {
            return {
                ...state,
                registrationProcessing: false,
            }
        }

        case UserActionTypes.RegisterUserFailed:  {
            return {
                ...state,
                registrationProcessing: false,
            }
        }

        default:
            return state;
    }
};
