export interface IErrorCatcher<T> {
    tryCatch(error: T): void;
}
