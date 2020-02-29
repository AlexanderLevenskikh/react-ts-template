import { IResourceForbiddenExceptionError } from 'root/shared/errorCatcher/exceptions/resourceForbiddenException';

export interface IForbiddenErrorArgs {
    errors: IResourceForbiddenExceptionError[];
}

export class ForbiddenError extends Error {
    errors: IResourceForbiddenExceptionError[];

    constructor({ errors = [] }: IForbiddenErrorArgs) {
        super();
        this.constructor = ForbiddenError;
        Object.setPrototypeOf(this, ForbiddenError.prototype);
        this.name = ForbiddenError.name;

        this.errors = errors;
    }
}
