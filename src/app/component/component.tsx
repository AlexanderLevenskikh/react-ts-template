import React, { FC, Suspense } from 'react';
import 'antd/dist/antd.css';
import { useApp } from 'root/app/component/hook';
import { contentSuspense } from 'root/shared/components/ContentSuspense';

export const App: FC = () => {
    const { showAuth } = useApp();

    const UserAuth = React.lazy(() => import('root/user/components/auth'));

    if (showAuth) {
        return (
            <Suspense fallback={ contentSuspense }>
                <UserAuth/>
            </Suspense>
        )
    }

    return (
        <div>
            React Typescript boilerplate!
        </div>
    );
};
App.displayName = 'App';
