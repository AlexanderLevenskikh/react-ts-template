import { IUserRegistrationModel } from 'root/user/types/registration';
import { ValidationRulesMap } from 'root/shared/types/validationRulesMap';

export enum RegistrationFormValidation {
    required = 'Заполните поле',
    emailRequired = 'Укажите адрес электронной почты',
    emailIsNotValid = 'Неверный формат адреса электронной почты',
    passwordConfirmationIsIncorrect = 'Пароли не совпадают',
    incorrectInn = 'ИНН должен состоять из 10 или 12 цифр',
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
    shortName: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
    fullName: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
    ],
    inn: [
        {
            required: true,
            message: RegistrationFormValidation.required,
            whitespace: true,
            validateTrigger: 'onSubmit',
        },
        {
            validator: (rule, value) => {
                if (!value || (value.length === 10 || value.length === 12) && value.match(/^\d+$/)) {
                    return Promise.resolve();
                }
                return Promise.reject(RegistrationFormValidation.incorrectInn);
            },
            validateTrigger: 'onBlur',
        },
    ],
};
