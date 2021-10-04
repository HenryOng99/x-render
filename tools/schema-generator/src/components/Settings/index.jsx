import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import ItemSettings from './ItemSettings';
import GlobalSettings from './GlobalSettings';
import { useStore, useSet } from '../../utils/hooks';
import './index.less';

const { TabPane } = Tabs;

export default function Settings({ widgets }) {
  const { selected, userProps = {} } = useStore();
  const globalSettings = userProps.globalSettings || defaultGlobalSettings;
  const [state, setState] = useSet({
    showRight: globalSettings?.show ?? true,
    showItemSettings: false,
  });
  const { showRight, showItemSettings } = state;

  const toggleRight = () => setState({ showRight: !showRight });

  const ToggleIcon = () => (
    <div
      className="absolute top-0 left-0 pointer"
      style={{ height: 30, width: 30, padding: '8px 0 0 8px', color:"black" }}
      onClick={toggleRight}
    >
      <RightOutlined className="f5" />
    </div>
  );

  const HideRightArrow = () => (
    <div
      className="absolute right-0 top-0 h2 flex-center"
      style={{ width: 40, transform: 'rotate(180deg)' }}
    >
      <ToggleIcon />
    </div>
  );

  // 如果没有选中任何item，或者是选中了根节点，object、list的内部，显示placeholder
  useEffect(() => {
    if ((selected && selected[0] === '0') || selected === '#' || !selected) {
      setState({ showItemSettings: false });
      setState({showRight: false});
    } else {
      setState({ showItemSettings: true });
      setState({showRight: true});
    }
  }, [selected]);

  return showRight ? (
    <div className="right-layout relative pl2">
      <ToggleIcon />
      <Tabs defaultActiveKey="1" onChange={() => {}}>
        {showItemSettings && (
          <TabPane tab="Item Configuration" key="1">
            <ItemSettings widgets={widgets} />
          </TabPane>
        )}
        {globalSettings?.show !== false ? <TabPane tab="Configuration" key={showItemSettings ? '2' : '1'}>
          <GlobalSettings widgets={widgets} />
        </TabPane> : <></>}
      </Tabs>
    </div>
  ) : (
    <HideRightArrow />
  );
}
