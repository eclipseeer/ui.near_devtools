import { getNearWithInMemoryKey } from '../helpers/getNearWithInMemoryKey';

export const deleteKey = async ({ payload, slice, store }: any) => {
  const { setOutcome } = slice.getActions();
  const storeState = store.getState();
  const { signerId, signerSk, publicKey } = payload;

  const near = await getNearWithInMemoryKey(signerId, signerSk, storeState.environment.current);
  const acc = await near.account(signerId);

  try {
    const res = await acc.deleteKey(publicKey);
    console.log(res);
    setOutcome(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    // @ts-ignore
    setOutcome(e.toString());
  }
};
