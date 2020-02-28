import { call, getContext, put, spawn, takeLatest } from 'redux-saga/effects';
import { IDependencies } from 'root/app/dependencies';
import { ILoginUserPayload, IRegisterUserPayload, UserActions, UserActionTypes } from 'root/user/actions';
import { PayloadAction } from 'typesafe-actions';
import { message } from 'antd';
import { mapUserDtoToView } from 'root/user/mappers/userDto';
import { mapUserRegistrationModelToDto } from 'root/user/mappers/modelToRegistrationEvent';
import { mapUserLoginModelToDto } from 'root/user/mappers/modelToLoginEvent';
import { localStorageUserKey } from 'root/app/constants';
import { ISessionInfoDto } from 'root/api/dto/account';

export function* userSagaArray() {
    yield spawn(watchFetchCurrentUserSaga);
    yield spawn(watchUserLogoutSaga);
    yield spawn(watchUserLoginSaga);
    yield spawn(watchUserRegistrationSaga);
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
    const { accountApi } = (yield getContext('dependencies')) as IDependencies;
    // TODO Token
    localStorage.removeItem(localStorageUserKey);
    yield call(accountApi.logout, [  ]);
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

        localStorage.setItem(localStorageUserKey, sessionInfo.user.id);
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
        yield call(accountApi.register, event);

        message.success('Пользователь зарегистрирован', 5);
        yield put(UserActions.RegisterUserSucceed());
    } catch (error) {
        yield put(UserActions.RegisterUserFailed({ error }));
    }
}
