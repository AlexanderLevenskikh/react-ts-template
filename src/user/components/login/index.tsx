import React, { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './styles.less';
import { useUserLoginForm } from 'root/user/components/login/hook';
import { registrationFormValidationRules } from 'root/user/components/registration/validations';
import { loginFormValidationRules } from 'root/user/components/login/validations';

export const UserLoginForm: FC = () => {
    const { loading, login } = useUserLoginForm();

    const handleSubmit = (values: any) => {
        login(values);
    };

    return (
        <Form onFinish={ handleSubmit } className={ styles.form }>
            <Form.Item
                name='email'
                rules={ loginFormValidationRules.email }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder='Электронная почта'
                    maxLength={ 50 }
                />
            </Form.Item>
            <Form.Item
                name='password'
                hasFeedback
                rules={ loginFormValidationRules.password }
                validateTrigger={ [ 'onSubmit', 'onBlur' ] }
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder='Пароль'
                    minLength={ 8 }
                />
            </Form.Item>
            <Form.Item
                name='rememberMe'
                valuePropName="checked"
            >
                <Checkbox>
                    Оставаться в системе
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    disabled={ loading }
                    className={ styles.submit }
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

