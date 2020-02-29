export interface IResourceForbiddenExceptionError {
    key: string;
    message?: string;
    field?: string;
}

export interface IForbiddenException {
    errors: IResourceForbiddenExceptionError[];
}

