import { AggregateExceptionCatcher } from 'root/shared/errorCatcher/aggregateExceptionCatcher';
import { userBackendCatcher } from 'root/user/errorCatcher/catcher';

export const errorCatcher = new AggregateExceptionCatcher([
    userBackendCatcher,
]);
