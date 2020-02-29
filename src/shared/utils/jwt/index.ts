import { ISessionInfoDto, ITokenResourceDto } from 'root/api/dto/account';
import { httpClient, HttpClientMethod, HttpClientResponseType } from 'root/shared/utils/httpClient';
import { UnauthorizedError } from 'root/shared/errorCatcher/errors/unauthorizedError';

export interface IStorageSessionInfo extends ITokenResourceDto {
    accessTokenExpiresAt: number;
    refreshTokenExpiresAt: number;
}

export class JwtUtils {
    private static localStorageUserKey = 'react-ts-template-user';
    private static accessTokenExpirationSeconds = 7200 * 1000;
    private static refreshTokenExpirationSeconds = 345600 * 1000;

    public static saveSessionInfo(sessionInfo: ISessionInfoDto) {
        localStorage.setItem(JwtUtils.localStorageUserKey, JSON.stringify({
            ...sessionInfo.tokenResource,
            accessTokenExpiresAt: (new Date()).valueOf() + JwtUtils.accessTokenExpirationSeconds,
            refreshTokenExpiresAt: (new Date()).valueOf() + JwtUtils.refreshTokenExpirationSeconds,
        }))
    }

    public static clearSessionInfo() {
        localStorage.removeItem(JwtUtils.localStorageUserKey);
    }

    public static findSessionInfo() {
        return localStorage.getItem(JwtUtils.localStorageUserKey);
    }

    public static getSessionInfo(): IStorageSessionInfo {
        const json = JwtUtils.findSessionInfo();
        if (!json) {
            throw new UnauthorizedError();
        }

        return JSON.parse(json);
    }

    public static isAuthenticated() {
        return Boolean(JwtUtils.findSessionInfo());
    }

    public static async refreshTokenIfExpired() {
        const sessionInfo = JwtUtils.getSessionInfo();

        let currentDateTimeMs = (new Date()).valueOf();
        const isExpired = sessionInfo.accessTokenExpiresAt <= currentDateTimeMs
            || sessionInfo.refreshTokenExpiresAt <= currentDateTimeMs;

        if (isExpired) {
            const nextSessionInfo: ISessionInfoDto = await httpClient({
                controller: '/api/user-account/token',
                action: 'refresh',
                method: HttpClientMethod.POST,
                request: {
                    body: {
                        accessToken: sessionInfo.accessToken,
                        refreshToken: sessionInfo.refreshToken,
                    },
                },
                responseType: HttpClientResponseType.JSON,
                allowAnonymous: true,
            });

            JwtUtils.saveSessionInfo(nextSessionInfo);
        }
    }
}
