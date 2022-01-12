import { connect, KeyPair, keyStores } from 'near-api-js';

export const deleteKey = async ({ payload, slice }: any) => {
  const { setOutcome } = slice.getActions();
  console.log('Delete key', payload);
  const { signerId, signerSk, publicKey } = payload;

  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey('testnet', signerId, KeyPair.fromString(signerSk));

  const near = await connect({
    headers: {},
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    keyStore,
  });

  const acc = await near.account(signerId);

  try {
    const res = await acc.deleteKey(publicKey);
    console.log(res);
    setOutcome(res.toString());
  } catch (e) {
    console.log(e);
    // @ts-ignore
    setOutcome(e.toString());
  }
};
