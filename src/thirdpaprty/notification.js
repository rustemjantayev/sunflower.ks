import { notification } from 'antd';

export const openNotificationWarning =(message, description, placement="bottomLeft") => {
    notification.warning({
      message,
      description,
      placement, //topLeft, topRight, bottomLeft, bottomRight
    });
};

export default openNotificationWarning;