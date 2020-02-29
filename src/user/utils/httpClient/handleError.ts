import { UnauthorizedError } from 'root/shared/errorCatcher/errors/unauthorizedError';
import { InternalServerError } from 'root/shared/errorCatcher/errors/internalServerError';
import { GeneralResponseError } from 'root/shared/errorCatcher/errors/general';
import { errorCatcher } from 'root/app/errorCatcher';
import { ExceptionType } from 'root/shared/errorCatcher/backendExceptionType';
import { ResponseStatus } from 'root/user/utils/httpClient/responseStatus';

export async function handleError<T>(response: Response) {
    const responseLocation = response.headers.get('location');
    if (responseLocation) {
        location.href = responseLocation;
        throw new UnauthorizedError();
    }

    if (response.status === ResponseStatus.Status401Unauthorized) {
        throw new UnauthorizedError();
    }

    const responseJson = await response.json();
    if (!(responseJson && typeof responseJson === 'object')) {
        throw new GeneralResponseError();
    }

    switch (response.status) {
        case ResponseStatus.Status403Forbidden:
            errorCatcher.tryCatch({
                type: ExceptionType.ResourceForbidden,
                payload: responseJson
            });
            break;
        case ResponseStatus.Status404NotFound:
            errorCatcher.tryCatch({
                type: ExceptionType.ResourceNotFound,
                payload: responseJson
            });
            break;
        case ResponseStatus.Status500InternalServerError:
        case ResponseStatus.Status503ServiceUnavailable:
            throw new InternalServerError();
        default:
            throw new GeneralResponseError();
    }
}
