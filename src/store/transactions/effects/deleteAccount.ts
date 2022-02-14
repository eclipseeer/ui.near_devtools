import { getNearWithInMemoryKey } from '../helpers/getNearWithInMemoryKey';

export const deleteAccount = async ({ payload, slice, store }: any) => {
  const { setOutcome } = slice.getActions();
  const storeState = store.getState();
  const { signerId, signerSk, beneficiaryId } = payload;

  const near = await getNearWithInMemoryKey(signerId, signerSk, storeState.environment.current);
  const acc = await near.account(signerId);

  try {
    const res = await acc.deleteAccount(beneficiaryId);
    console.log(res);
    setOutcome(JSON.stringify(res));
  } catch (e) {
    console.log(e);
    // @ts-ignore
    setOutcome(e.toString());
  }
};
