import { connect, KeyPair, keyStores } from 'near-api-js';

export const deleteAccount = async ({ payload }: any) => {
  console.log('Start deletion', payload);
  const { signerId, signerSk, beneficiaryId } = payload;

  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey('mainnet', signerId, KeyPair.fromString(signerSk));

  const near = await connect({
    headers: {},
    // networkId: 'testnet',
    // nodeUrl: 'https://rpc.testnet.near.org',
    networkId: 'mainnet',
    nodeUrl: 'https://rpc.mainnet.near.org',
    keyStore,
  });

  const acc = await near.account(signerId);
  const res = await acc.deleteAccount(beneficiaryId);
  console.log(res);
};
