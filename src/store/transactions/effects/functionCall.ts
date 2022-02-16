import BN from 'bn.js';
import { parseNearAmount } from 'near-api-js/lib/utils/format';
import { getNearWithInMemoryKey } from '../helpers/getNearWithInMemoryKey';
// import { parseSeedPhrase } from 'near-seed-phrase';

const toGas = (terraGas: string | number) => new BN(Number(terraGas) * 1000000000000);

export const functionCall = async ({ payload, slice, store }: any) => {
  const { signerId, signerSk, contractId, methodName, args, terraGas, attachedDeposit } = payload;
  const { setOutcome } = slice.getActions();
  const storeState = store.getState();

  const near = await getNearWithInMemoryKey(signerId, signerSk, storeState.environment.current);
  const acc = await near.account(signerId);

  try {
    const res = await acc.functionCall({
      args: JSON.parse(args), // TODO Don't use JSON.parse
      contractId,
      methodName,
      gas: toGas(terraGas), // @ts-ignore
      attachedDeposit: parseNearAmount(attachedDeposit),
    });
    console.log(res);
    setOutcome(JSON.stringify(res));
  } catch (e) {
    console.log(e);
  }
};
