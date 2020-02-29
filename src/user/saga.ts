import { call, getContext, put, spawn, takeLatest } from 'redux-saga/effects';
import { IDependencies } from 'root/app/dependencies';
import {
    ILoginUserPayload,
    IRegisterUserPayload,
    ISendEmailActivationPayload,
    UserActions,
    UserActionTypes
} from 'root/user/actions';
import { PayloadAction } from 'typesafe-actions';
import { message } from 'antd';
import { mapUserDtoToView } from 'root/user/mappers/userDto';
import { mapUserRegistrationModelToDto } from 'root/user/mappers/modelToRegistrationEvent';
import { mapUserLoginModelToDto } from 'root/user/mappers/modelToLoginEvent';
import { ISessionInfoDto } from 'root/api/dto/account';
import { JwtUtils } from 'root/user/utils/jwt';

export function* userSagaArray() {
    yield spawn(watchFetchCurrentUserSaga);
    yield spawn(watchUserLogoutSaga);
    yield spawn(watchUserLoginSaga);
    yield spawn(watchUserRegistrationSaga);
    yield spawn(watchEmailActivation);
}

export function* watchFetchCurrentUserSaga() {
    yield takeLatest(UserActionTypes.GetUser, fetchCurrentUserSaga);
}
export function* fetchCurrentUserSaga() {
    try {
        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const user = yield call(accountApi.getAccount);
        const view = mapUserDtoToView(user);

        yield put(UserActions.GetUserSucceed({ view }));
    } catch (error) {
        yield put(UserActions.GetUserFailed({ error }));
    }
}

export function* watchUserLogoutSaga() {
    yield takeLatest(UserActionTypes.Logout, userLogoutSaga);
}
export function* userLogoutSaga() {
    try {
        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const sessionInfo = JwtUtils.getSessionInfo();
        JwtUtils.clearSessionInfo();
        // TODO Token
        yield call(accountApi.logout, {
            accessToken: sessionInfo.accessToken,
            refreshToken: sessionInfo.refreshToken,
        });

        yield put(UserActions.LogoutSucceed());
    } catch (error) {
        yield put(UserActions.LogoutFailed({ error }));
    }

}

export function* watchUserLoginSaga() {
    yield takeLatest(UserActionTypes.LoginUser, userLoginSaga);
}
export function* userLoginSaga(action: PayloadAction<string, ILoginUserPayload>) {
    try {
        const { payload: { model } } = action;

        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const event = mapUserLoginModelToDto(model);
        const sessionInfo: ISessionInfoDto = yield call(accountApi.login, event);

        JwtUtils.saveSessionInfo(sessionInfo);
        yield put(UserActions.LoginUserSucceed());
    } catch (error) {
        yield put(UserActions.LoginUserFailed({ error }));
    }
}

export function* watchUserRegistrationSaga() {
    yield takeLatest(UserActionTypes.RegisterUser, userRegistrationSaga);
}
export function* userRegistrationSaga(action: PayloadAction<string, IRegisterUserPayload>) {
    try {
        const { payload: { model } } = action;

        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const event = mapUserRegistrationModelToDto(model);
        const sessionInfo: ISessionInfoDto = yield call(accountApi.register, event);
        yield put(UserActions.SendEmailActivation({ email: sessionInfo.user.email }));

        message.success('Пользователь зарегистрирован', 5);
        yield put(UserActions.RegisterUserSucceed());
    } catch (error) {
        yield put(UserActions.RegisterUserFailed({ error }));
    }
}

export function* watchEmailActivation() {
    yield takeLatest(UserActionTypes.SendEmailActivation, emailActivationSaga);
}
export function* emailActivationSaga(action: PayloadAction<string, ISendEmailActivationPayload>) {
    try {
        const { payload: { email } } = action;
        // TODO хост в конфиге
        const baseUrl = 'http://localhost:5000/api/user-account/activate-user';
        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        yield call(accountApi.sendUserActivation, {
            baseUrl,
            email,
        });
        yield put(UserActions.SendEmailActivationSucceed());
    } catch (error) {
        yield put(UserActions.SendEmailActivationFailed({ error }));
    }
}
