import { ValidationRule } from "antd/es/form";
import { IUserRegistrationModel } from "root/user/types/registration";
import { ValidationRulesMap } from "root/shared/types/validationRulesMap";

export enum RegistrationFormValidation {
    required = 'Заполните поле',
    emailRequired = 'Укажите адрес электронной почты',
    emailIsNotValid = 'Неверный формат адреса электронной почты',
    passwordConfirmationIsIncorrect = 'Пароли не совпадают',
}

export const registrationFormValidationRules: ValidationRulesMap<IUserRegistrationModel> = {
    email: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.emailRequired,
                whitespace: true,
            },
            {
                type: 'email',
                message: RegistrationFormValidation.emailIsNotValid,
            },
        ],
        validateTrigger: 'onBlur',
    },
    password: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.required,
                whitespace: true,
            },
        ],
        validateTrigger: 'onBlur',
    },
    passwordConfirmation: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.required,
                whitespace: true,
            },
            {
                validator: (rule, value, callback, source, options) => {
                    if (value === source.password) {
                        return Promise.resolve();
                    }
                    return Promise.reject(RegistrationFormValidation.passwordConfirmationIsIncorrect);
                }
            }
        ],
        validateTrigger: 'onBlur',
    },
    firstName: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.required,
                whitespace: true,
            },
        ],
        validateTrigger: 'onBlur',
    },
    lastName: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.required,
                whitespace: true,
            },
        ],
        validateTrigger: 'onBlur',
    },
    middleName: {
        rules: [
            {
                required: true,
                message: RegistrationFormValidation.required,
                whitespace: true,
            },
        ],
        validateTrigger: 'onBlur',
    }
};
