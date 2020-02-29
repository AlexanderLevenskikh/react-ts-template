import { call, getContext, put, spawn, takeLatest } from '@redux-saga/core/effects';
import { UserActions, UserActionTypes } from 'root/user/actions';
import { IDependencies } from 'root/app/dependencies';
import { mapUserDtoToView } from 'root/user/mappers/userDto';
import { watchUserLogoutFailed, watchUserLogoutSaga } from 'root/user/saga/logout';
import { openNotification } from 'root/shared/utils/openNotification';

export function* getCurrentUserSagaArray() {
    yield spawn(watchGetCurrentUserSaga);
    yield spawn(watchGetCurrentUserFailedSaga);
}

export function* watchGetCurrentUserSaga() {
    yield takeLatest(UserActionTypes.GetUser, getCurrentUserSaga);
}
export function* getCurrentUserSaga() {
    try {
        const { accountApi } = (yield getContext('dependencies')) as IDependencies;
        const user = yield call(accountApi.getAccount);
        const view = mapUserDtoToView(user);

        yield put(UserActions.GetUserSucceed({ view }));
    } catch (error) {
        yield put(UserActions.GetUserFailed({ error }));
    }
}

export function* watchGetCurrentUserFailedSaga() {
    yield takeLatest(UserActionTypes.GetUserFailed, getCurrentUserFailedSaga);
}
export function* getCurrentUserFailedSaga() {
    openNotification('Произошла ошибка при получении текущего пользователя');
}
