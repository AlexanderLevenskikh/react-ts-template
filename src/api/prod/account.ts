import { httpClient, HttpClientMethod, HttpClientResponseType } from 'root/shared/utils/httpClient';
import { IAccountApi } from 'root/api/interface/account';
import {
    ILoginEventDto,
    IRegistrationEventDto,
    ISendCurrentUserActivationDto,
    ISendUserActivationDto,
    ISessionInfoDto,
    ITokenResourceDto,
    IUserDto
} from 'root/api/dto/account';

export class AccountApi implements IAccountApi {
    login(event: ILoginEventDto): Promise<ISessionInfoDto> {
        return httpClient({
            controller: '/api/user-account',
            action: 'login',
            method: HttpClientMethod.POST,
            request: {
                body: event,
            },
            responseType: HttpClientResponseType.JSON,
            allowAnonymous: true,
        });
    }

    register(event: IRegistrationEventDto): Promise<ISessionInfoDto> {
        return httpClient({
            controller: '/api/user-account',
            action: 'register',
            method: HttpClientMethod.POST,
            request: {
                body: event,
            },
            responseType: HttpClientResponseType.JSON,
            allowAnonymous: true,
        });
    }

    logout(token: ITokenResourceDto): Promise<any> {
        return httpClient({
            controller: '/api/user-account',
            action: 'logout',
            method: HttpClientMethod.POST,
            request: {
                body: token,
            },
            responseType: HttpClientResponseType.JSON,
            allowAnonymous: true,
        });
    }

    getAccount(): Promise<IUserDto> {
        return httpClient({
            controller: '/api/user-account',
            action: '',
            method: HttpClientMethod.GET,
            request: {},
            responseType: HttpClientResponseType.JSON,
        });
    }

    sendUserActivation(event: ISendUserActivationDto): Promise<any> {
        return httpClient({
            controller: '/api/user-account',
            action: 'send-activation-email',
            method: HttpClientMethod.POST,
            request: {
                body: event,
            },
            responseType: HttpClientResponseType.JSON,
            allowAnonymous: true,
        });
    }

    sendCurrentUserActivation(event: ISendCurrentUserActivationDto): Promise<any> {
        return httpClient({
            controller: '/api/user-account',
            action: 'send-activation-user',
            method: HttpClientMethod.POST,
            request: {
                body: event,
            },
            responseType: HttpClientResponseType.JSON,
            allowAnonymous: true,
        });
    }
}
