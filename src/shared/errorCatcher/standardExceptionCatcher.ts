import { INotFoundBackendException } from 'root/shared/errorCatcher/exceptions/notFound';
import { IResourceForbiddenException } from 'root/shared/errorCatcher/exceptions/resourceForbiddenException';
import { AggregateExceptionCatcher } from 'root/shared/errorCatcher/aggregateExceptionCatcher';
import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';
import { IException } from 'root/shared/errorCatcher/backendException';
import { ExceptionType } from 'root/shared/errorCatcher/backendExceptionType';

interface IStandardBackendExceptionCatcherParams {
    notFoundErrorCatchers?: Array<IErrorCatcher<INotFoundBackendException>>;
    forbiddenErrorCatchers?: Array<IErrorCatcher<IResourceForbiddenException>>;
}

export class StandardExceptionCatcher implements IErrorCatcher<IException> {
    private notFoundErrorCatchers: AggregateExceptionCatcher<INotFoundBackendException>;
    private forbiddenErrorCatchers: AggregateExceptionCatcher<IResourceForbiddenException>;

    constructor(
        {
            notFoundErrorCatchers = [],
            forbiddenErrorCatchers = [],
        }: IStandardBackendExceptionCatcherParams
    ) {
        this.forbiddenErrorCatchers = new AggregateExceptionCatcher<IResourceForbiddenException>(forbiddenErrorCatchers);
        this.notFoundErrorCatchers = new AggregateExceptionCatcher<INotFoundBackendException>(notFoundErrorCatchers);
    }

    tryCatch(error: IException): void {
        switch (error.type) {
            case ExceptionType.ResourceNotFound:
                const notFoundBackendError = error.payload as INotFoundBackendException;
                this.notFoundErrorCatchers.tryCatch(notFoundBackendError);
                break;
            case ExceptionType.ResourceForbidden:
                const resourceForbiddenBackendError = error.payload as IResourceForbiddenException;
                this.forbiddenErrorCatchers.tryCatch(resourceForbiddenBackendError);
                break;
            default:
                break;
        }
    }
}
