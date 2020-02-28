import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { useUserRegistrationForm } from 'root/user/components/registration/hook';
import { registrationFormValidationRules } from 'root/user/components/registration/validations';
import styles from './styles.less';

export const UserRegistrationForm: FC = () => {
    const { loading, register } = useUserRegistrationForm();

    const handleSubmit = (values: any) => {
        register(values);
    };

    return (
        <Form onFinish={ handleSubmit } className={ styles.form }>
            <Form.Item
                name='email'
                rules={ registrationFormValidationRules.email }
            >
                <Input
                    placeholder='Электронная почта'
                />
            </Form.Item>
            <Form.Item
                name='password'
                hasFeedback
                rules={ registrationFormValidationRules.password }
            >
                <Input.Password
                    placeholder='Пароль'
                    minLength={ 8 }
                />
            </Form.Item>
            <Form.Item
                name='passwordConfirmation'
                hasFeedback
                rules={ registrationFormValidationRules.passwordConfirmation }
            >
                <Input.Password
                    placeholder='Подтверждение пароля'
                    minLength={ 8 }
                />
            </Form.Item>
            <Form.Item
                name='lastName'
                rules={ registrationFormValidationRules.lastName }
            >
                <Input
                    placeholder='Фамилия'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='firstName'
                
                rules={ registrationFormValidationRules.firstName }
            >
                <Input
                    placeholder='Имя'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='middleName'
                rules={ registrationFormValidationRules.middleName }
            >
                <Input
                    placeholder='Отчество'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='phoneNumber'
            >
                <Input placeholder='Номер телефона'/>
            </Form.Item>
            <Form.Item
                name='shortName'
                rules={ registrationFormValidationRules.shortName }
            >
                <Input placeholder='Краткое наименование организации'/>
            </Form.Item>
            <Form.Item
                name='fullName'
                rules={ registrationFormValidationRules.fullName }
            >
                <Input placeholder='Полное наименование организации'/>
            </Form.Item>
            <Form.Item
                name='inn'
                rules={ registrationFormValidationRules.inn }
            >
                <Input placeholder='ИНН Организации'/>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={ loading }
                    className={ styles.submit }
                >
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};
