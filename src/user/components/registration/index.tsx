import React, { FC } from 'react';
import { Button, Checkbox, Form, Icon, Input, Tooltip } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { useUserRegistrationForm } from 'root/user/components/registration/hook';
import { RegistrationFormValidation } from 'root/user/components/registration/validations';
import styles from './styles.less';

interface IProps {
}

export const UserRegistrationForm: FC<IProps & FormComponentProps> = ({ form }) => {
    const { loading, register } = useUserRegistrationForm();
    const { getFieldDecorator } = form;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                register(values);
            }
        });
    };

    return (
        <Form { ...formItemLayout } onSubmit={ handleSubmit } className={ styles.form }>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('email', {
                    rules: [{ required: true, message: RegistrationFormValidation.required, whitespace: true }],
                })(
                    <Input className={ styles.control } placeholder='Электронная почта'/>
                ) }
            </Form.Item>
            <Form.Item hasFeedback className={ styles.row }>
                { getFieldDecorator('password', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input.Password className={ styles.control } placeholder='Пароль'/>
                ) }
            </Form.Item>
            <Form.Item hasFeedback className={ styles.row }>
                { getFieldDecorator('passwordConfirmation', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input.Password className={ styles.control } placeholder='Подтверждение пароля'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('lastName', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='Фамилия'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('firstName', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='Имя'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('middleName', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='Отчество'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('phoneNumber')(
                    <Input className={ styles.control } placeholder='Номер телефона'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('shortName', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='Краткое наименование организации'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('fullName', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='Полное наименование организации'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('inn', {
                    rules: [{ required: true, message: RegistrationFormValidation.required } ],
                })(
                    <Input className={ styles.control } placeholder='ИНН Организации'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                <Button
                    className={ styles.control }
                    type="primary"
                    htmlType="submit"
                    disabled={ loading }
                >
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};

export const WrappedUserRegistrationForm = Form.create<IProps & FormComponentProps>({ name: 'register' })(UserRegistrationForm);

