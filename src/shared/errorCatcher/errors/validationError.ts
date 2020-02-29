import { IValidationError } from 'root/shared/errorCatcher/exceptions/validation';

export interface IForbiddenErrorArgs {
    errors: IValidationError[];
}

export class ValidationError extends Error {
    errors: IValidationError[];

    constructor({ errors = [] }: IForbiddenErrorArgs) {
        super();
        this.constructor = ValidationError;
        Object.setPrototypeOf(this, ValidationError.prototype);
        this.name = ValidationError.name;

        this.errors = errors;
    }
}
