export const state = {
  list: ['a1', 'a2', 'a3', 'a4', 'a5'],
  map: {
    a1: {
      actionId: 'a1',
      title: 'Func call',
      type: 'functionCall'
    },
    a2: {
      actionId: 'a2',
      title: 'Create My New Account',
      type: 'createAccount'
    },
    a3: {
      actionId: 'a3',
      title: 'Delete Account',
      type: 'deleteAccount'
    },
    a4: {
      actionId: 'a4',
      title: 'Delete Key',
      type: 'deleteKey'
    },
    a5: {
      actionId: 'a5',
      title: 'Deploy Contract',
      type: 'deployContract'
    },
  },
  outcome: null,
};
