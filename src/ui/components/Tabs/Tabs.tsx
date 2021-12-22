import { Tab } from './Tab/Tab';
import { cls } from './Tabs.css';

export const Tabs = () => (
  <div css={cls.container}>
    <Tab title="Functional Call" />
    <Tab title="Action number 1" />
    <Tab title="Create account" />
  </div>
);
