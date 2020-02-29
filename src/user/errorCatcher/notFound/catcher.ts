import { NotFoundError } from 'shared/errorCatcher/errors/notFoundError';

export class UserNotFoundCatcher implements IErrorCatcher<INotFoundBackendException> {
    tryCatch({ resourceType }: INotFoundBackendException): void {
        const messageResourceType = resourceType as ContractResourceType;

        if (messageResourceType === ContractResourceType.Contract) {
            throw new NotFoundError({
                title: 'Договор не найден',
                message: 'Скорее всего вы ошиблись, набирая адрес',
            });
        }
    }
}
