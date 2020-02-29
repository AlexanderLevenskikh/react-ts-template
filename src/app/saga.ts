import { spawn, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from 'typesafe-actions';
import { IErrorPayload } from 'root/shared/types/actions/errorPayload';
import { notification } from 'antd';
import { userSagaArray } from 'root/user/saga';
import { openNotification } from 'root/shared/utils/openNotification';

export function* rootSaga() {
    yield spawn(userSagaArray);
}

export function* watchErrorHandlingSaga() {
    yield takeLatest((action: any) => /^.*\/fail(ed)?$/.test(action.type), errorHandlingSaga);
}

export function* errorHandlingSaga(action: PayloadAction<string, IErrorPayload>) {
    const { error, hideModal } = action.payload;
    if (!hideModal) {
        // @ts-ignore
        if (error.title) {
            yield openNotification(
                // @ts-ignore
                error.title,
                error.message,
            );
        }
    }
}
