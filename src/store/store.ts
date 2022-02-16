import { createStore } from '../storio';
import { tabs } from './tabs/tabs';
import { transactions } from './transactions';
import { environment } from './environment/environment';
import { utils } from './utils/utils';

export const store = createStore({
  state: {
    data: 'my data',
  },
  persistent: {
    localStorage: {
      include: ['tabs.runtimeData'], // error - slice name - only data from state
    },
  },
  slices: {
    tabs,
    actions: transactions,
    environment,
    utils,
    keyVault: {},
  },
});
