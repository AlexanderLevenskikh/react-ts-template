import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './styles.less';
import { AppHeaderLogo } from 'root/shared/components/layout/AppHeader/Logo';
import { AppHeaderLogout } from 'root/shared/components/layout/AppHeader/Logout';

const { Content, Header, Sider, Footer } = Layout;

export const AppHeader: FC = () => {
    return (
        <Header className={ styles.header }>
            <ul className={ styles.ul }>
                <li className={ styles.li }>
                    <AppHeaderLogo/>
                </li>
            </ul>

            <ul className={ styles.ul }>
                <li className={ styles.li }>
                    Позднякова Нина Васильевна
                </li>
                <li className={ styles.li }>
                    <AppHeaderLogout/>
                </li>
            </ul>
        </Header>
    );
};
