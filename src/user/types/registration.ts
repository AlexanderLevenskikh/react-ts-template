import { CompanyType } from 'root/api/dto/account';

export interface IUserRegistrationModel {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    password: string;
    passwordConfirmation: string;
    phoneNumber?: string;
    inn: string;
    fullName: string;
    shortName: string;
    companyType: CompanyType;
}
