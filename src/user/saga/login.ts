import { call, getContext, put, spawn, takeLatest, cancel } from '@redux-saga/core/effects';
import { ILoginUserPayload, UserActions, UserActionTypes } from 'root/user/actions';
import { PayloadAction } from 'typesafe-actions';
import { IDependencies } from 'root/app/dependencies';
import { mapUserLoginModelToDto } from 'root/user/mappers/modelToLoginEvent';
import { ISessionInfoDto } from 'root/api/dto/account';
import { JwtUtils } from 'root/shared/utils/jwt';
import { ForbiddenError } from 'root/shared/errorCatcher/errors/forbiddenError';
import { UserForbiddenErrorKeys } from 'root/user/errorCatcher/forbidden/keys';
import { message } from 'antd';
import { IErrorPayload } from 'root/shared/types/actions/errorPayload';
import { openNotification } from 'root/shared/utils/openNotification';

export function* userLoginSagaArray() {
    yield spawn(watchUserLoginSaga);
    yield spawn(watchUserLoginFailedSaga);
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

export function* watchUserLoginFailedSaga() {
    yield takeLatest(UserActionTypes.LoginUserFailed, userLoginFailedSaga);
}
export function* userLoginFailedSaga(action: PayloadAction<string, IErrorPayload>) {
    const { payload: { error } } = action;
    let handled = false;

    if (error instanceof ForbiddenError) {
        error.errors.forEach(error => {
            switch (error.key) {
                case UserForbiddenErrorKeys.invalidEmailOrPassword:
                    message.error('Неверный адрес электронной почты или пароль', 2);
                    handled = true;
            }
        });
    }

    if (!handled) {
        openNotification('Произошла ошибка при авторизации');
    }
}
