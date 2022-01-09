import { Tab } from './Tab/Tab';
import { cls } from './Tabs.css';
import { useStoreActions, useStoreState } from '../../../storio';

export const Tabs = () => {
  const [list, map, currentTabId] = useStoreState([
    (state: any) => state.tabs.list,
    (state: any) => state.tabs.map,
    (state: any) => state.tabs.currentTab.tabId,
  ]);
  const [openTab] = useStoreActions([(actions: any) => actions.tabs.openTab]);

  return (
    <div css={cls.container}>
      {list.map((tabId: string) => (
        <Tab key={tabId} tab={map[tabId]} openTab={openTab} currentTabId={currentTabId} />
      ))}
    </div>
  );
};
