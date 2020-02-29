import { createAction as csa } from 'typesafe-actions';
import { IErrorPayload } from 'root/shared/types/actions/errorPayload';
import { IUserRegistrationModel } from 'root/user/types/registration';
import { IUserLoginModel } from 'root/user/types/login';
import { UserView } from 'root/user/types/user';

export interface IGetUserSuccessPayload {
    view: UserView;
}

export interface ILoginUserPayload {
    model: IUserLoginModel;
}

export interface IRegisterUserPayload {
    model: IUserRegistrationModel;
}

export interface ISendEmailActivationPayload {
    email: string;
}

export enum UserActionTypes {
    GetUser = 'user/get',
    GetUserSucceed = 'user/get/succeed',
    GetUserFailed = 'user/get/failed',
    LoginUser = 'user/login',
    LoginUserSucceed = 'user/login/succeed',
    LoginUserFailed = 'user/login/failed',
    Logout = 'user/logout',
    LogoutSucceed = 'user/logout/succeed',
    LogoutFailed = 'user/logout/failed',
    RegisterUser = 'user/registration',
    RegisterUserSucceed = 'user/registration/succeed',
    RegisterUserFailed = 'user/registration/failed',
    SendEmailActivation = 'user/activation',
    SendEmailActivationSucceed = 'user/activation/succeed',
    SendEmailActivationFailed = 'user/activation/failed',
}

export const UserActions = {
    GetUser: csa(UserActionTypes.GetUser)(),
    GetUserSucceed: csa(UserActionTypes.GetUserSucceed)<IGetUserSuccessPayload>(),
    GetUserFailed: csa(UserActionTypes.GetUserFailed)<IErrorPayload>(),
    LoginUser: csa(UserActionTypes.LoginUser)<ILoginUserPayload>(),
    LoginUserSucceed: csa(UserActionTypes.LoginUserSucceed)(),
    LoginUserFailed: csa(UserActionTypes.LoginUserFailed)<IErrorPayload>(),
    Logout: csa(UserActionTypes.Logout)(),
    LogoutSucceed: csa(UserActionTypes.LogoutSucceed)(),
    LogoutFailed: csa(UserActionTypes.LogoutFailed)<IErrorPayload>(),
    RegisterUser: csa(UserActionTypes.RegisterUser)<IRegisterUserPayload>(),
    RegisterUserSucceed: csa(UserActionTypes.RegisterUserSucceed)(),
    RegisterUserFailed: csa(UserActionTypes.RegisterUserFailed)<IErrorPayload>(),
    SendEmailActivation: csa(UserActionTypes.SendEmailActivation)<ISendEmailActivationPayload>(),
    SendEmailActivationSucceed: csa(UserActionTypes.SendEmailActivationSucceed)(),
    SendEmailActivationFailed: csa(UserActionTypes.SendEmailActivationFailed)<IErrorPayload>(),
};
