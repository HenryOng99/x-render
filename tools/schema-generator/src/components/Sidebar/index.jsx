import React from 'react';
import { defaultSettings } from '../../settings';
import { useStore } from '../../utils/hooks';
import './index.css';
import Element from './Element';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const Sidebar = props => {
  const { userProps = {} } = useStore();
  const { settings } = userProps;
  const _settings = Array.isArray(settings) ? settings : defaultSettings;

  return (
    <div className="left-layout w5-l w4">
      {Array.isArray(_settings) ? (
        _settings.map((item, idx) => {
          if (item && item.show === false) {
            return null;
          }
          if (item && item.collapsible === true) {
            return (
              <div key={idx}>
                <Collapse defaultActiveKey={item.isOpen ? idx : undefined}>
                  <Panel className="f6 b" header={item.title}  key={idx}>
                    <ul className="pl0">
                      {Array.isArray(item.widgets) ? (
                        item.widgets.map((widget, idx) => {
                          return (
                            <Element key={idx.toString()} {...props} {...widget} />
                          );
                        })
                      ) : (
                        <div>此处配置有误</div>
                      )}
                    </ul>
                  </Panel>
                </Collapse>
              </div>
            );
          }
          return (
            <div key={idx}>
              <p className="f6 b">{item.title}</p>
              <ul className="pl0">
                {Array.isArray(item.widgets) ? (
                  item.widgets.map((widget, idx) => {
                    return (
                      <Element key={idx.toString()} {...props} {...widget} />
                    );
                  })
                ) : (
                  <div>此处配置有误</div>
                )}
              </ul>
            </div>
          );
        })
      ) : (
        <div>配置错误：Setting不是数组</div>
      )}
    </div>
  );
};

export default Sidebar;
