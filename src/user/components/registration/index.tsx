import React, { FC } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useUserRegistrationForm } from 'root/user/components/registration/hook';
import { registrationFormValidationRules } from 'root/user/components/registration/validations';
import styles from './styles.less';
import { CompanyType } from 'root/api/dto/account';

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
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input
                    placeholder='Электронная почта'
                    maxLength={ 50 }
                />
            </Form.Item>
            <Form.Item
                name='password'
                hasFeedback
                rules={ registrationFormValidationRules.password }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
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
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input.Password
                    placeholder='Подтверждение пароля'
                    minLength={ 8 }
                />
            </Form.Item>
            <Form.Item
                name='lastName'
                rules={ registrationFormValidationRules.lastName }
                validateTrigger={ [ 'onSubmit' ] }
            >
                <Input
                    placeholder='Фамилия'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='firstName'
                rules={ registrationFormValidationRules.firstName }
                validateTrigger={ [ 'onSubmit' ] }
            >
                <Input
                    placeholder='Имя'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='middleName'
                rules={ registrationFormValidationRules.middleName }
                validateTrigger={ [ 'onSubmit' ] }
            >
                <Input
                    placeholder='Отчество'
                    maxLength={ 500 }
                />
            </Form.Item>
            <Form.Item
                name='phoneNumber'
                validateTrigger={ [ 'onBlur' ] }
            >
                <Input
                    placeholder='Номер телефона'
                    prefix='+'
                    type='tel'
                    maxLength={ 11 }
                />
            </Form.Item>
            <Form.Item
                name='shortName'
                rules={ registrationFormValidationRules.shortName }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input placeholder='Краткое наименование организации'/>
            </Form.Item>
            <Form.Item
                name='fullName'
                rules={ registrationFormValidationRules.fullName }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input placeholder='Полное наименование организации'/>
            </Form.Item>
            <Form.Item
                name='inn'
                rules={ registrationFormValidationRules.inn }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input
                    maxLength={ 12 }
                    placeholder='ИНН Организации'
                />
            </Form.Item>
            <Form.Item
                name="companyType"
                rules={ registrationFormValidationRules.companyType }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Radio.Group defaultValue={ CompanyType.SellerBuyer }>
                    <Radio value={ CompanyType.SellerBuyer }>Я поставщик/покупатель</Radio>
                    <Radio value={ CompanyType.Bank }>Я банк</Radio>
                </Radio.Group>
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
