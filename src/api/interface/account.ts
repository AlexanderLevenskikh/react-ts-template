import {
    ILoginEventDto, IRegistrationEventDto,
    ISendCurrentUserActivationDto,
    ISendUserActivationDto,
    ISessionInfoDto,
    IUserDto
} from 'root/api/dto/account';

export interface IAccountApi {
    login(event: ILoginEventDto): Promise<ISessionInfoDto>;
    register(event: IRegistrationEventDto): Promise<ISessionInfoDto>;
    logout(token: string[]): Promise<any>;
    getAccount(): Promise<IUserDto>;
    refreshToken(token: string[]): Promise<ISessionInfoDto>;
    sendUserActivation(event: ISendUserActivationDto): Promise<any>;
    sendCurrentUserActivation(event: ISendCurrentUserActivationDto): Promise<any>;
}
