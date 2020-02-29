import { call, getContext, put, spawn, takeLatest } from '@redux-saga/core/effects';
import { IRegisterUserPayload, ISendEmailActivationPayload, UserActions, UserActionTypes } from 'root/user/actions';
import { PayloadAction } from 'typesafe-actions';
import { IDependencies } from 'root/app/dependencies';
import { mapUserRegistrationModelToDto } from 'root/user/mappers/modelToRegistrationEvent';
import { ISessionInfoDto } from 'root/api/dto/account';
import { message } from 'antd';
import { ForbiddenError } from 'root/shared/errorCatcher/errors/forbiddenError';
import { UserForbiddenErrorKeys } from 'root/user/errorCatcher/forbidden/keys';
import { host } from 'root/app/constants';
import { IErrorPayload } from 'root/shared/types/actions/errorPayload';
import { openNotification } from 'root/shared/utils/openNotification';
import { ValidationError } from 'root/shared/errorCatcher/errors/validationError';
import { UserValidationExceptionKeys } from 'root/user/errorCatcher/validation/keys';

export function* userRegistrationSagaArray() {
    yield spawn(watchUserRegistrationSaga);
    yield spawn(watchUserRegistrationFailedSaga);
    yield spawn(watchEmailActivation);
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

        message.success('Пользователь зарегистрирован', 2);
        yield put(UserActions.RegisterUserSucceed());
    } catch (error) {
        yield put(UserActions.RegisterUserFailed({ error }));
    }
}

export function* watchUserRegistrationFailedSaga() {
    yield takeLatest(UserActionTypes.RegisterUserFailed, userRegistrationFailedSaga);
}
export function* userRegistrationFailedSaga(action: PayloadAction<string, IErrorPayload>) {
    const { payload: { error } } = action;
    let handled = false;

    if (error instanceof ForbiddenError) {
        error.errors.forEach(error => {
            switch (error.key) {
                case UserForbiddenErrorKeys.EmailIsTaken:
                    message.error('Пользователь уже зарегистрирован', 2);
                    handled = true;
            }
        });
    } else if (error instanceof ValidationError) {
        error.errors.forEach(error => {
            if (error.key === UserValidationExceptionKeys.WrongStringLength && error.field === 'phone') {
                message.error('Укажите 11 символов в номере телефона', 2);
                handled = true;
            }
        });
    }

    if (!handled) {
        openNotification('Произошла ошибка при регистрации пользователя');
    }
}

export function* watchEmailActivation() {
    yield takeLatest(UserActionTypes.SendEmailActivation, emailActivationSaga);
}
export function* emailActivationSaga(action: PayloadAction<string, ISendEmailActivationPayload>) {
    try {
        const { payload: { email } } = action;
        const baseUrl = `${host}/api/user-account/activate-user`;
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
