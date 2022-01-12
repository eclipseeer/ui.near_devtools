import { createStore } from '../storio';
import { tabs } from './tabs';
import { actionsSlice } from './actions';

export const store = createStore({
  slices: {
    tabs,
    actions: actionsSlice,
    environment: {},
    keyVault: {},
  },
});

// console.log(store.state?.get());
