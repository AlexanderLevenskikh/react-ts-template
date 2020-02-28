import { IUserRegistrationModel } from 'root/user/types/registration';
import { ValidationRulesMap } from 'root/shared/types/validationRulesMap';

export enum RegistrationFormValidation {
    required = 'Заполните поле',
    emailRequired = 'Укажите адрес электронной почты',
    emailIsNotValid = 'Неверный формат адреса электронной почты',
    passwordConfirmationIsIncorrect = 'Пароли не совпадают',
}

export const registrationFormValidationRules: ValidationRulesMap<IUserRegistrationModel> = {
    email: [
        {
            required: true,
            message: RegistrationFormValidation.emailRequired,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
        {
            type: 'email',
            message: RegistrationFormValidation.emailIsNotValid,
            validateTrigger: 'onBlur',
        },
    ],
    password: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
    passwordConfirmation: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
        ({ getFieldValue }) => ({
            validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(RegistrationFormValidation.passwordConfirmationIsIncorrect);
            },
            validateTrigger: 'onBlur',
        }),
    ],
    firstName: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
    lastName:  [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
    middleName: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
};
