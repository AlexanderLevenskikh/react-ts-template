import React, { FC } from 'react';
import styles from './styles.less';
import { useAppHeaderLogout } from 'root/shared/components/layout/AppHeader/Logout/hook';

export const AppHeaderLogout: FC = () => {
    const { logout } = useAppHeaderLogout();

    return (
        <button
            className={ styles.logout }
            onClick={ logout }
        >
            Выйти
        </button>
    );
};
