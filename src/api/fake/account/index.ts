import {IAccountApi} from "root/api/interface/account";
import {
    ILoginEventDto,
    ISendCurrentUserActivationDto,
    ISendUserActivationDto,
    ISessionInfoDto,
    IUserDto
} from "root/api/dto/account";
import {delay} from "root/shared/utils/delay";
import {AccountFakeDataService} from "root/api/fake/account/service/account";

export class AccountFakeApi implements IAccountApi {
    async login(event: ILoginEventDto): Promise<ISessionInfoDto> {
        await delay();

        return AccountFakeDataService.login(event);
    }

    async logout(token: string[]): Promise<any> {
        await delay();

        AccountFakeDataService.logout();
    }

    async getAccount(): Promise<IUserDto> {
        await delay();

        return AccountFakeDataService.getCurrentUser();
    }

    async refreshToken(token: string[]): Promise<ISessionInfoDto> {
        await delay();

        return AccountFakeDataService.refreshToken(token);
    }

    async sendUserActivation(event: ISendUserActivationDto): Promise<any> {
        await delay();
    }

    async sendCurrentUserActivation(event: ISendCurrentUserActivationDto): Promise<any> {
        await delay();
    }
}
