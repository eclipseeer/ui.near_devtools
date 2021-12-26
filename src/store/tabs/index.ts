const content = {
  state: {
    data: { a: 1 },
  },
  actions: {
    setData: ({ payload, slice }: any) => {
      slice.data.a = payload;
    },
  },
  effects: {
    someEffect: async ({ payload }: any) => {
      console.log('Async effect');
      return payload;
    },
  },
  slices: {
    a: {},
  },
};

export const tabs = {
  state: {
    allTabs: [],
    tab: {
      id: '1',
      title: 'Create account',
      order: 1,
    },
  },
  actions: {
    updateTab: ({ payload, slice }: any) => {
      slice.tab.title = payload.title;
      slice.tab.order = payload.order;
    },
  },
  slices: {
    content,
  },
};
