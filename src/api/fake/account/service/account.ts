import { ILoginEventDto, IRegistrationEventDto, ISessionInfoDto, IUserDto } from 'root/api/dto/account';
import {UserFakeDataProvider} from "root/api/fake/account/provider/user";
import {UnauthorizedError} from "root/shared/errorCatcher/errors/unauthorizedError";
import {AccountFakeDataMappers} from "root/api/fake/account/mappers/account";
import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import {Nullable} from "root/shared/types/nullable";
import { ForbiddenError } from 'root/shared/errorCatcher/errors/forbiddenError';

let loggedUserId: Nullable<string> = null;

export class AccountFakeDataService {
    public static login(event: ILoginEventDto): ISessionInfoDto {
        const user = UserFakeDataProvider.getUserByEmail(event.userIdentifier);

        if (user.password !== event.password) {
            throw new UnauthorizedError();
        }

        loggedUserId = event.userIdentifier;

        return {
            user: AccountFakeDataMappers.mapUserEntityToDto(user),
            tokenResource: {
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
            },
            roles: [],
        }
    }

    public static register(event: IRegistrationEventDto): ISessionInfoDto {
        const users = UserFakeDataProvider.getUsers();
        const hasUserWithSameLogin = users.some(user => event.email === user.email);

        if (hasUserWithSameLogin) {
            throw new ForbiddenError({ message: 'User with same email already exists' });
        }

        if (event.password !== event.confirmPassword) {
            throw new ForbiddenError({ message: 'Password and it\'s confirmation are not same' });
        }

        const user = AccountFakeDataMappers.mapRegistrationEventToUser(event);
        UserFakeDataProvider.createUser(user);

        return {
            user: AccountFakeDataMappers.mapUserEntityToDto(user),
            tokenResource: {
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
            },
            roles: [],
        }
    }

    public static logout() {
        loggedUserId = null;
    }

    public static getCurrentUser(): IUserDto {
        if (!loggedUserId) {
            throw new UnauthorizedError();
        }

        const user = UserFakeDataProvider.getUser(loggedUserId);

        return AccountFakeDataMappers.mapUserEntityToDto(user);
    }
}
