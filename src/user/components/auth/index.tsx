import React, { FC } from "react";
import { useUserAuth } from "root/user/components/auth/hook";
import styles from './styles.less';
import { Tabs } from "antd";

export const UserAuth: FC = () => {
    const { userIsAuthenticated } = useUserAuth();

    if (!userIsAuthenticated) {
        return null;
    }

    return (
        <main className={ styles.mainAuth }>
            <nav className={ styles.authNav }>
                <Tabs

                />
            </nav>
        </main>
    );
};
UserAuth.displayName = 'UserAuth';
