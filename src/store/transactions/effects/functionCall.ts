import { connect, KeyPair, keyStores } from 'near-api-js';
import BN from 'bn.js';

const toGas = (terraGas: string | number) => new BN(Number(terraGas) * 1000000000000);


export const functionCall = async ({ payload }: any) => {
  console.log('Start functionCall', payload);
  const { signerId, signerSk, contractId, methodName, args, terraGas, attachedDeposit } = payload;

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

  try {
    const acc = await near.account(signerId);
    const res = await acc.functionCall({
      args: JSON.parse(args), // TODO Don't use JSON.parse
      contractId,
      methodName,
      gas: toGas(terraGas),
      // attachedDeposit: new BN(1) ,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
