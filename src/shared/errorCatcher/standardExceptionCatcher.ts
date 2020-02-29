import { INotFoundException } from 'root/shared/errorCatcher/exceptions/notFound';
import { IForbiddenException } from 'root/shared/errorCatcher/exceptions/forbidden';
import { AggregateExceptionCatcher } from 'root/shared/errorCatcher/aggregateExceptionCatcher';
import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';
import { IException } from 'root/shared/errorCatcher/backendException';
import { ExceptionType } from 'root/shared/errorCatcher/backendExceptionType';
import { IValidationException } from 'root/shared/errorCatcher/exceptions/validation';

interface IStandardBackendExceptionCatcherParams {
    notFoundErrorCatchers?: Array<IErrorCatcher<INotFoundException>>;
    validationErrorCatchers?: Array<IErrorCatcher<IValidationException>>;
    forbiddenErrorCatchers?: Array<IErrorCatcher<IForbiddenException>>;
}

export class StandardExceptionCatcher implements IErrorCatcher<IException> {
    private notFoundErrorCatchers: AggregateExceptionCatcher<INotFoundException>;
    private validationErrorCatchers: AggregateExceptionCatcher<IValidationException>;
    private forbiddenErrorCatchers: AggregateExceptionCatcher<IForbiddenException>;

    constructor(
        {
            notFoundErrorCatchers = [],
            validationErrorCatchers = [],
            forbiddenErrorCatchers = [],
        }: IStandardBackendExceptionCatcherParams
    ) {
        this.forbiddenErrorCatchers = new AggregateExceptionCatcher<IForbiddenException>(forbiddenErrorCatchers);
        this.validationErrorCatchers = new AggregateExceptionCatcher<IValidationException>(validationErrorCatchers);
        this.notFoundErrorCatchers = new AggregateExceptionCatcher<INotFoundException>(notFoundErrorCatchers);
    }

    tryCatch(error: IException): void {
        switch (error.type) {
            case ExceptionType.ResourceNotFound:
                const notFoundError = error.payload as INotFoundException;
                this.notFoundErrorCatchers.tryCatch(notFoundError);
                break;
            case ExceptionType.ValidationError:
                const validationError = error.payload as IValidationException;
                this.validationErrorCatchers.tryCatch(validationError);
                break;
            case ExceptionType.ResourceForbidden:
                const resourceForbiddenError = error.payload as IForbiddenException;
                this.forbiddenErrorCatchers.tryCatch(resourceForbiddenError);
                break;
            default:
                break;
        }
    }
}
