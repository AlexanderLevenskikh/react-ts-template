import { httpClient, HttpClientMethod, HttpClientResponseType } from 'root/api/httpClient';
import { IAccountApi } from 'root/api/interface/account';
import {
    ILoginEventDto,
    ISendCurrentUserActivationDto,
    ISendUserActivationDto,
    ISessionInfoDto,
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
        });
    }

    logout(token: string[]): Promise<any> {
        return httpClient({
            controller: '/api/user-account',
            action: 'logout',
            method: HttpClientMethod.POST,
            request: {
                body: token,
            },
            responseType: HttpClientResponseType.JSON,
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

    refreshToken(token: string[]): Promise<ISessionInfoDto> {
        return httpClient({
            controller: '/api/user-account/token',
            action: 'refresh',
            method: HttpClientMethod.POST,
            request: {
                body: token,
            },
            responseType: HttpClientResponseType.JSON,
        });
    }

    sendUserActivation(event: ISendUserActivationDto): Promise<any> {
        return httpClient({
            controller: '/api/user-account',
            action: 'send-activation',
            method: HttpClientMethod.POST,
            request: {
                body: event,
            },
            responseType: HttpClientResponseType.JSON,
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
        });
    }
}
