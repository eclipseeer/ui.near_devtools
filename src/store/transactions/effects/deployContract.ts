import { getNearWithInMemoryKey } from '../helpers/getNearWithInMemoryKey';

export const deployContract = async ({ payload, slice, store }: any) => {
  const { setOutcome } = slice.getActions();
  const storeState = store.getState();
  const { signerId, signerSk, contractWasmFile } = payload;

  const near = await getNearWithInMemoryKey(signerId, signerSk, storeState.environment.current);
  const acc = await near.account(signerId);

  try {
    const wasm = await contractWasmFile[0].arrayBuffer().then((r: any) => new Uint8Array(r));
    const res = await acc.deployContract(wasm);
    console.log(res);
    setOutcome(JSON.stringify(res));
  } catch (e) {
    console.log(e);
  }
};
