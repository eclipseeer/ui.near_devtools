import { createStore } from '../storio';
import { tabs } from './tabs';
import { transactions } from './transactions';

export const store = createStore({
  slices: {
    tabs,
    actions: transactions,
    environment: {},
    keyVault: {},
  },
});

// console.log(store.state?.get());
