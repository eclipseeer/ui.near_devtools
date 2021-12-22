import { Sidebar } from './Sidebar/Sidebar';
import { Tabs } from './Tabs/Tabs';
import { Content } from './Content/Content';
import { cls } from './App.css';

export const App = () => (
  <div css={cls.container}>
    <div css={cls.card}>
      <Sidebar />
      <Tabs />
      <Content />
    </div>
  </div>
);
