import React, { FC } from 'react';
import styles from './styles.less';
import { Layout } from 'antd';
import { AppMenuItem } from 'root/shared/components/layout/AppMenu/items/item';

const { Content, Header, Sider, Footer } = Layout;

export const AppMenu: FC = () => {
    return (
        <Sider width={ 100 } className={ styles.menu }>
            <nav>
                <ul className={ styles.ul }>
                    <AppMenuItem/>
                </ul>
            </nav>
        </Sider>
    );
};
