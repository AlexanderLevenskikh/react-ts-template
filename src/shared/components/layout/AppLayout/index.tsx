import React, { FC } from 'react';
import { Layout } from 'antd';
import { AppHeader } from 'root/shared/components/layout/AppHeader';
import { AppMenu } from 'root/shared/components/layout/AppMenu';
import styles from './styles.less';

const { Content } = Layout;

export const AppLayout: FC = () => {
    return (
        <Layout className={ styles.layout }>
            <AppHeader/>
            <Layout>
                <AppMenu/>
                <Content>main content</Content>
            </Layout>
        </Layout>
    );
};
