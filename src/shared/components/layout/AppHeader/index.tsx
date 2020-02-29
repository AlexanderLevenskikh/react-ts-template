import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';
import styles from './styles.less';
import { AppHeaderLogo } from 'root/shared/components/layout/AppHeader/Logo';
import { AppHeaderLogout } from 'root/shared/components/layout/AppHeader/Logout';
import { useDispatch } from 'react-redux';
import { UserActions } from 'root/user/actions';

const { Content, Header, Sider, Footer } = Layout;

export const AppHeader: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(UserActions.GetUser());
    }, [ dispatch ]);

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
