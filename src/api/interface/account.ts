import {
    ILoginEventDto,
    IRegistrationEventDto,
    ISendCurrentUserActivationDto,
    ISendUserActivationDto,
    ISessionInfoDto,
    ITokenResourceDto,
    IUserDto
} from 'root/api/dto/account';

export interface IAccountApi {
    login(event: ILoginEventDto): Promise<ISessionInfoDto>;
    register(event: IRegistrationEventDto): Promise<ISessionInfoDto>;
    logout(token: ITokenResourceDto): Promise<any>;
    getAccount(): Promise<IUserDto>;
    sendUserActivation(event: ISendUserActivationDto): Promise<any>;
    sendCurrentUserActivation(event: ISendCurrentUserActivationDto): Promise<any>;
}
