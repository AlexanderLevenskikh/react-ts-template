import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';
import { IResourceForbiddenException } from 'root/shared/errorCatcher/exceptions/resourceForbiddenException';
import { ForbiddenError } from 'root/shared/errorCatcher/errors/forbiddenError';

export class UserForbiddenCatcher implements IErrorCatcher<IResourceForbiddenException> {
    tryCatch({ errors }: IResourceForbiddenException): void {
        if (Array.isArray(errors)) {
            throw new ForbiddenError({ errors });
        }
    }
}
