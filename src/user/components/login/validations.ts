import { ValidationRulesMap } from 'root/shared/types/validationRulesMap';
import { IUserLoginModel } from 'root/user/types/login';

export enum LoginFormValidation {
    emailRequired = 'Укажите адрес электронной почты',
    emailIsNotValid = 'Неверный формат адреса электронной почты',
    required = 'Заполните поле'
}

export const loginFormValidationRules: ValidationRulesMap<IUserLoginModel> = {
    email: [
        {
            required: true,
            message: LoginFormValidation.emailRequired,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
        {
            type: 'email',
            message: LoginFormValidation.emailIsNotValid,
            validateTrigger: 'onBlur',
        },
    ],
    password: [
        {
            required: true,
            message: LoginFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
};
