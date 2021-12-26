import { createStore } from '../storio';
import { tabs } from './tabs';

export const store = createStore({
  state: {
    isLoading: false,
    user: {
      accountId: 'id1',
      name: 'Alex',
    },
    space: {
      id: '1',
      title: 'My Space',
    },
  },
  actions: {
    updateUserName: ({ payload, slice }: any) => {
      slice.user.name = payload;
    }
  },
  slices: {
    tabs,
  },
});

console.log(store.state?.get());
