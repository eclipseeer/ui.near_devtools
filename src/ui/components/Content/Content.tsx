import { useStoreState } from '../../../storio';
import { Transaction } from './Transaction/Transaction';
import { KeyVault } from './KeyVault/KeyVault';
import { cls } from './Content.css';

export const Content = () => {
  const currentTab = useStoreState((state: any) => state.tabs.currentTab);
  return (
    <div css={cls.container}>
      <h1>{currentTab.title}</h1>
      {currentTab.type === 'action' && <Transaction actionId={currentTab.actionId} />}
      {currentTab.type === 'keyVault' && <KeyVault />}
    </div>
  );
};
