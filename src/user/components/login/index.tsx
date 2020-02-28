import React, { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from './styles.less';
import { useUserLoginForm } from 'root/user/components/login/hook';

export const UserLoginForm: FC = () => {
    const { loading, login } = useUserLoginForm();

    const handleSubmit = (values: any) => {
        login(values);
    };

    return (
        <Form onFinish={ handleSubmit } className={ styles.form }>
            <Form.Item>
                <Input placeholder='Электронная почта'/>
            </Form.Item>
            <Form.Item hasFeedback>
                <Input.Password placeholder='Пароль'/>
            </Form.Item>
            <Form.Item>
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

