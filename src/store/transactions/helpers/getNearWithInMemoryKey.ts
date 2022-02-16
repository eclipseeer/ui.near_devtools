import { connect, KeyPair, keyStores } from 'near-api-js';

export const getNearWithInMemoryKey = async (
  signerId: any,
  signerSk: any,
  { networkId, nodeUrl }: any,
) => {
  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey(networkId, signerId, KeyPair.fromString(signerSk));

  return connect({
    headers: {},
    networkId,
    nodeUrl,
    keyStore,
  });
};
