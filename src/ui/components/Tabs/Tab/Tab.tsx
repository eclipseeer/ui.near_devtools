import { cls } from './Tab.css';

interface Props {
  tab: {
    tabId: string;
    title: string;
  };
  openTab: any;
  currentTabId: any;
}

export const Tab = ({ tab, openTab, currentTabId }: Props) => {
  const isActive = currentTabId === tab.tabId;
  const open = () => !isActive && openTab(tab.tabId);

  return (
    <div css={isActive ? cls.activeContainer : cls.nonActiveContainer} onClick={open}>
      <span>{tab.title}</span>
    </div>
  );
};
