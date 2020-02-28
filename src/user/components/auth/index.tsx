import React, { FC } from 'react';
import styles from './styles.less';
import { Tabs } from 'antd';
import { UserRegistrationForm } from 'root/user/components/registration';
import { UserLoginForm } from 'root/user/components/login';

enum UserAuthTab {
    Login = 'Login',
    Registration = 'Registration',
}

const { TabPane } = Tabs;

const UserAuth: FC = () => {
    return (
        <main className={ styles.mainAuth }>
            <nav>
                <Tabs
                    defaultActiveKey={ UserAuthTab.Login }
                    animated={ false }
                    tabBarStyle={{
                        textAlign: 'center',
                        width: '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderBottom: 'none',
                    }}
                    tabBarGutter={ 20 }
                >
                    <TabPane tab='Вход' key={ UserAuthTab.Login }>
                        <UserLoginForm/>
                    </TabPane>
                    <TabPane tab='Регистрация' key={ UserAuthTab.Registration }>
                        <UserRegistrationForm />
                    </TabPane>
                </Tabs>
            </nav>
        </main>
    );
};

UserAuth.displayName = 'UserAuth';
export default UserAuth;
