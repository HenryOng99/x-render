import React from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import FRCore from './form-render-core/src';
import { widgets as defaultWidgets } from './widgets/antd';

export { defaultWidgets as widgets };
export {
  useForm,
  connectForm,
  createWidget,
  mapping,
} from './form-render-core/src';

const FR = ({ widgets, configProvider, ...rest }) => {
  return (
    <ConfigProvider locale={enUS} {...configProvider}>
      <FRCore widgets={{ ...defaultWidgets, ...widgets }} {...rest} />
    </ConfigProvider>
  );
};

export default FR;
