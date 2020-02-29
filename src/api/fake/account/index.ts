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
import { delay } from 'root/shared/utils/delay';
import { AccountFakeDataService } from 'root/api/fake/account/service/account';

export class AccountFakeApi implements IAccountApi {
    async login(event: ILoginEventDto): Promise<ISessionInfoDto> {
        await delay();

        return AccountFakeDataService.login(event);
    }

    async register(event: IRegistrationEventDto): Promise<ISessionInfoDto> {
        await delay();

        return AccountFakeDataService.register(event);
    }

    async logout(token: ITokenResourceDto): Promise<any> {
        await delay();

        AccountFakeDataService.logout();
    }

    async getAccount(): Promise<IUserDto> {
        await delay();

        return AccountFakeDataService.getCurrentUser();
    }

    async sendUserActivation(event: ISendUserActivationDto): Promise<any> {
        await delay();
    }

    async sendCurrentUserActivation(event: ISendCurrentUserActivationDto): Promise<any> {
        await delay();
    }
}
