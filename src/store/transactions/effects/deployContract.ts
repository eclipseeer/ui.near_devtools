import { connect, KeyPair, keyStores } from 'near-api-js';

export const deployContract = async ({ payload }: any) => {
  const { signerId, signerSk, contractWasmFile } = payload;

  const keyStore = new keyStores.InMemoryKeyStore();
  await keyStore.setKey('testnet', signerId, KeyPair.fromString(signerSk));

  const near = await connect({
    headers: {},
    networkId: 'testnet',
    nodeUrl: 'https://rpc.testnet.near.org',
    keyStore,
  });

  try {
    const wasm = await contractWasmFile[0].arrayBuffer().then((r: any) => new Uint8Array(r));
    const acc = await near.account(signerId);
    const res = await acc.deployContract(wasm);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
