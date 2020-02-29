import { notification } from 'antd';

export const openNotification = (message: string, description?: string) => {
    notification.open({
        message,
        description,
        onClick: () => {},
    });
};
