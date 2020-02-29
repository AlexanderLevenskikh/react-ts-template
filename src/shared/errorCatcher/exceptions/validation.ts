export interface IValidationError {
    field: string;
    message: string;
    key: string;
    args: any;
}

export interface IValidationException {
    errors: IValidationError[];
}

