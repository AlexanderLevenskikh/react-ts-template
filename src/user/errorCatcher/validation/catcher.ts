import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';
import { IValidationException } from 'root/shared/errorCatcher/exceptions/validation';
import { ValidationError } from 'root/shared/errorCatcher/errors/validationError';

export class ValidationCatcher implements IErrorCatcher<IValidationException> {
    tryCatch({ errors }: IValidationException): void {
        if (Array.isArray(errors)) {
            throw new ValidationError({ errors });
        }
    }
}
