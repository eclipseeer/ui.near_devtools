export const state = {
  list: ['a1', 'a2', 'a3', 'a4', 'a5', 'addKey'],
  map: {
    a1: {
      actionId: 'a1',
      title: 'Func call',
      type: 'functionCall',
      formData: {
        signerId: '',
        signerSk: '',
        contractId: '',
        methodName: '',
        args: `{}`,
        terraGas: '50',
        attachedDeposit: '0',
      },
    },
    a2: {
      actionId: 'a2',
      title: 'Create My New Account',
      type: 'createAccount',
      formData: {},
    },
    a3: {
      actionId: 'a3',
      title: 'Delete Account',
      type: 'deleteAccount',
      formData: {
        signerId: '',
        signerSk: '',
        beneficiaryId: ''
      },
    },
    addKey: {
      actionId: 'addKey',
      title: 'Add Key',
      type: 'addKey',
      formData: {
        signerId: '',
        signerSk: '',
        publicKey: '',
      },
    },
    a4: {
      actionId: 'a4',
      title: 'Delete Key',
      type: 'deleteKey',
      formData: {
        signerId: '',
        signerSk: '',
        publicKey: '',
      },
    },
    a5: {
      actionId: 'a5',
      title: 'Deploy Contract',
      type: 'deployContract',
      formData: {
        signerId: '',
        signerSk: '',
        contractWasmFile: null,
      },
    },
  },
  outcome: null,
};
