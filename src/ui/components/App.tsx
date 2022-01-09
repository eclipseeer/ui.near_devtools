import { Sidebar } from './Sidebar/Sidebar';
import { Tabs } from './Tabs/Tabs';
import { Tab } from './Tab/Tab';
import { cls } from './App.css';

export const App = () => (
  <div css={cls.container}>
    <div css={cls.card}>
      <Sidebar />
      <Tabs />
      <Tab />
    </div>
  </div>
);
