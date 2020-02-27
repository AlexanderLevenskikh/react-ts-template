import React, { FC } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import styles from './styles.less';
import { useUserLoginForm } from 'root/user/components/login/hook';
import { LoginFormValidation } from 'root/user/components/login/validations';

interface IProps {
}

export const UserLoginForm: FC<IProps & FormComponentProps> = ({ form }) => {
    const { loading, login } = useUserLoginForm();
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
                login(values);
            }
        });
    };

    return (
        <Form { ...formItemLayout } onSubmit={ handleSubmit } className={ styles.form }>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('email', {
                    rules: [{ required: true, message: LoginFormValidation.required, whitespace: true }],
                })(
                    <Input className={ styles.control } placeholder='Электронная почта'/>
                ) }
            </Form.Item>
            <Form.Item hasFeedback className={ styles.row }>
                { getFieldDecorator('password', {
                    rules: [{ required: true, message: LoginFormValidation.required } ],
                })(
                    <Input.Password className={ styles.control } placeholder='Пароль'/>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                { getFieldDecorator('rememberMe')(
                    <Checkbox className={ styles.control }>
                        Оставаться в системе
                    </Checkbox>
                ) }
            </Form.Item>
            <Form.Item className={ styles.row }>
                <Button
                    className={ styles.control }
                    type="primary"
                    htmlType="submit"
                    disabled={ loading }
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export const WrappedUserLoginForm = Form.create<IProps & FormComponentProps>({ name: 'login' })(UserLoginForm);

