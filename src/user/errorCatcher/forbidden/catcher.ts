import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';
import { IForbiddenException } from 'root/shared/errorCatcher/exceptions/forbidden';
import { ForbiddenError } from 'root/shared/errorCatcher/errors/forbiddenError';

export class UserForbiddenCatcher implements IErrorCatcher<IForbiddenException> {
    tryCatch({ errors }: IForbiddenException): void {
        if (Array.isArray(errors)) {
            throw new ForbiddenError({ errors });
        }
    }
}
