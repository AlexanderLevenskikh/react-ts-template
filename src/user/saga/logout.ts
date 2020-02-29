import { call, getContext, put, spawn, takeLatest } from '@redux-saga/core/effects';
import { UserActions, UserActionTypes } from 'root/user/actions';
import { IDependencies } from 'root/app/dependencies';
import { JwtUtils } from 'root/shared/utils/jwt';
import { openNotification } from 'root/shared/utils/openNotification';

export function* userLogoutSagaArray() {
    yield spawn(watchUserLogoutSaga);
    yield spawn(watchUserLogoutFailed);
}

export function* watchUserLogoutSaga() {
    yield takeLatest(UserActionTypes.Logout, userLogoutSaga);
}
export function* userLogoutSaga() {
    try {
        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const sessionInfo = JwtUtils.getSessionInfo();
        JwtUtils.clearSessionInfo();
        yield call(accountApi.logout, {
            accessToken: sessionInfo.accessToken,
            refreshToken: sessionInfo.refreshToken,
        });

        yield put(UserActions.LogoutSucceed());
    } catch (error) {
        yield put(UserActions.LogoutFailed({ error }));
    }
}

export function* watchUserLogoutFailed() {
    yield takeLatest(UserActionTypes.LogoutFailed, userLogoutFailed);
}
export function* userLogoutFailed() {
    openNotification('Произошла ошибка при выходе из системы');
}
