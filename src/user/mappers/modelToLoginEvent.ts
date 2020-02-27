import { ILoginEventDto } from 'root/api/dto/account';
import { IUserLoginModel } from 'root/user/types/login';

export function mapUserLoginModelToDto(model: IUserLoginModel): ILoginEventDto {
    return {
        userIdentifier: model.email.trim(),
        password: model.password.trim(),
        rememberMe: model.rememberMe,
    }
}
