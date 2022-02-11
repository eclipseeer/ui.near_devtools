import { connect, KeyPair, keyStores } from 'near-api-js';

export const addKey = async ({ payload, slice }: any) => {
  const { setOutcome } = slice.getActions();
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
    const res = await acc.addKey(publicKey);
    console.log(res);
    setOutcome(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    // @ts-ignore
    setOutcome(e.toString());
  }
};
