import { IErrorCatcher } from 'root/shared/errorCatcher/exceptionCatcher';

export class AggregateExceptionCatcher<T> implements IErrorCatcher<T> {
    catchers: Array<IErrorCatcher<T>>;

    constructor(catchers: Array<IErrorCatcher<T>>) {
        this.catchers = catchers;
    }

    tryCatch(error: T): void {
        for (const catcher of this.catchers) {
            catcher.tryCatch(error);
        }
    }
}

