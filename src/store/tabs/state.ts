export const state = {
  currentTab: {
    tabId: 'b',
    title: 'Key Vault',
    type: 'keyVault',
  },
  list: ['a', 'b', 'c', 'd'],
  map: {
    a: {
      tabId: 'a',
      title: 'My func call',
      type: 'action',
      actionId: 'a1',
    },
    b: {
      tabId: 'b',
      title: 'Key Vault',
      type: 'keyVault',
    },
    c: {
      tabId: 'c',
      title: 'Environment',
      type: 'environment',
    },
    d: {
      tabId: 'd',
      title: 'Create My New Account',
      type: 'action',
      actionId: 'a2',
    },
  },
};
