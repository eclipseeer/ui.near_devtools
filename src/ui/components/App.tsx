import { Sidebar } from './Sidebar/Sidebar';
import { Tabs } from './Tabs/Tabs';
import { TabCard } from './TabCard/TabCard';
import { cls } from './App.css';

export const App = () => (
  <div css={cls.container}>
    <div css={cls.card}>
      <Sidebar />
      <Tabs />
      <TabCard />
    </div>
  </div>
);
