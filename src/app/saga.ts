import { spawn, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import { IErrorPayload } from 'root/shared/types/actions/errorPayload';
import { notification } from 'antd';

export function* rootSaga() {
//    yield spawn(userSagaArray);
}

export function* watchFetchCurrentUserSaga() {
    yield takeLatest((action: any) => /^.*\/fail(ed)?$/.test(action.type), errorHandlingSaga);
}

const openNotification = (message: string, description?: string) => {
    notification.open({
        message,
        description,
        onClick: () => {},
    });
};

export function* errorHandlingSaga(action: PayloadAction<string, IErrorPayload>) {
    const { error, hideModal } = action.payload;
    if (!hideModal) {
        // @ts-ignore
        if (error.title) {
            openNotification(
                // @ts-ignore
                error.title,
                error.message,
            );
        }
    }
}
