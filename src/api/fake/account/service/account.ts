import {ILoginEventDto, ISessionInfoDto, IUserDto} from "root/api/dto/account";
import {UserFakeDataProvider} from "root/api/fake/account/provider/user";
import {UnauthorizedError} from "root/shared/model/errors/unauthorizedError";
import {AccountFakeDataMappers} from "root/api/fake/account/mappers/account";
import {IUserFakeDataEntity} from "root/api/fake/account/entity/user";
import {Nullable} from "root/shared/types/nullable";

let loggedUserId: Nullable<string> = null;

export class AccountFakeDataService {
    public static login(event: ILoginEventDto): ISessionInfoDto {
        const user = UserFakeDataProvider.getUser(event.userIdentifier);

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

    public static refreshToken(token: string[]): ISessionInfoDto {
        if (!loggedUserId) {
            throw new UnauthorizedError();
        }

        const user = UserFakeDataProvider.getUser(loggedUserId);

        return {
            user: AccountFakeDataMappers.mapUserEntityToDto(user),
            tokenResource: {
                accessToken: 'accessToken',
                refreshToken: 'refreshToken',
            },
            roles: [],
        }
    }
}
