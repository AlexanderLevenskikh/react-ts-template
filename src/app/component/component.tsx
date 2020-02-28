import React, { FC, Suspense } from 'react';
import 'antd/dist/antd.css';
import { useApp } from 'root/app/component/hook';
import { contentSuspense } from 'root/shared/components/ContentSuspense';
import { AppLayout } from 'root/shared/components/layout/AppLayout';

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
        <AppLayout>

        </AppLayout>
    );
};
App.displayName = 'App';
