import { IUserRegistrationModel } from 'root/user/types/registration';
import { IRegistrationEventDto } from 'root/api/dto/account';

export function mapUserRegistrationModelToDto(model: IUserRegistrationModel): IRegistrationEventDto {
    return {
        firstName: model.firstName.trim(),
        secondName: model.lastName.trim(),
        surname: model.middleName.trim(),
        email: model.email.trim(),
        fullName: model.fullName.trim(),
        shortName: model.shortName.trim(),
        phone: model.phoneNumber ? model.phoneNumber.trim() : '',
        tin: model.inn.trim(),
        password: model.password.trim(),
        confirmPassword: model.passwordConfirmation.trim(),
        type: model.companyType,
    }
}
