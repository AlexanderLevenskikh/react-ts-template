import React from 'react';
import styles from './styles.less';
import { Spin } from 'antd';

export const contentSuspense = (
    <div className={ styles.suspense }>
        <Spin />
    </div>
);
