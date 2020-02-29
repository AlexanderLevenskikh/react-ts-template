import { UserForbiddenCatcher } from 'root/user/errorCatcher/forbidden/catcher';
import { StandardExceptionCatcher } from 'root/shared/errorCatcher/standardExceptionCatcher';

export const userBackendCatcher = new StandardExceptionCatcher({
    forbiddenErrorCatchers: [
        new UserForbiddenCatcher(),
    ],
});
