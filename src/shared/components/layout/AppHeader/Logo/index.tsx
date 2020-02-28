import React, { FC } from 'react';
import styles from './styles.less';

export const AppHeaderLogo: FC = () => {
    return (
        <p className={ styles.logo }>
            Logo.<span className={ styles.coloredPart }>Type</span>
        </p>
    );
};
