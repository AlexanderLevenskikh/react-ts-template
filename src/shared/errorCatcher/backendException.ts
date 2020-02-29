import { ExceptionType } from 'root/shared/errorCatcher/backendExceptionType';

export interface IException {
    type: ExceptionType;
    payload: any;
}

