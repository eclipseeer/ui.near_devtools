export const state = {
  list: ['a1', 'a2', 'a3', 'a4'],
  map: {
    a1: {
      actionId: 'a1',
      title: 'My func call',
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
  },
  outcome: null,
};
