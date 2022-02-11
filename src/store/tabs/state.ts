export const state = {
  runtimeData: 1,
  currentTab: {
    tabId: 'functionCall',
    title: 'Function call',
    type: 'action',
    actionId: 'a1',
  },
  list: ['deleteAccount', 'addKey', 'deleteKey', 'deployContract', 'functionCall'],
  map: {
    functionCall: {
      tabId: 'functionCall',
      title: 'Function call',
      type: 'action',
      actionId: 'a1',
    },
    deleteAccount: {
      tabId: 'deleteAccount',
      title: 'Delete account',
      type: 'action',
      actionId: 'a3',
    },
    addKey: {
      tabId: 'addKey',
      title: 'Add Key',
      type: 'action',
      actionId: 'addKey',
    },
    createAccount: {
      tabId: 'createAccount',
      title: 'Create Account',
      type: 'action',
      actionId: 'a2',
    },
    deleteKey: {
      tabId: 'deleteKey',
      title: 'Delete Key',
      type: 'action',
      actionId: 'a4',
    },
    deployContract: {
      tabId: 'deployContract',
      title: 'Deploy Contract',
      type: 'action',
      actionId: 'a5',
    },
  },
};
