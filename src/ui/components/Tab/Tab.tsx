import { useStoreState } from '../../../storio';
import { Action } from './Action/Action';
import { KeyVault } from './KeyVault/KeyVault';
import { cls } from './Tab.css';

export const Tab = () => {
  const [currentTab] = useStoreState([(state: any) => state.tabs.currentTab]);
  // console.log(currentTab);

  return (
    <div css={cls.container}>
      <h1>{currentTab.title}</h1>
      {currentTab.type === 'action' && <Action actionId={currentTab.actionId} />}
      {currentTab.type === 'keyVault' && <KeyVault />}
    </div>
  );
};
