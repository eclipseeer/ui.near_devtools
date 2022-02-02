import { createStore } from '../storio';
import { tabs } from './tabs/tabs';
import { transactions } from './transactions';

export const store = createStore({
  state: {
    data: 'my data',
  },
  persistent: {
    localStorage: {
      include: ['tabs.runtimeData'], // error - slice name
    },
  },
  slices: {
    tabs,
    actions: transactions,
    environment: {},
    keyVault: {},
  },
});
