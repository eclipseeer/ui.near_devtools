import { useStoreState } from '../../../../storio';
import { FunctionCall } from './Actions/FunctionCall/FunctionCall';
import { CreateAccount } from './Actions/CreateAccount/CreateAccount';
import { DeleteAccount } from './Actions/DeleteAccount/DeleteAccount';
import { DeleteKey } from './Actions/DeleteKey/DeleteKey';
import { DeployContract } from './Actions/DeployContract/DeployContract';
import { cls } from './Transaction.css';

interface Props {
  actionId: any;
}

export const Transaction = ({ actionId }: Props) => {
  const [action, outcome] = useStoreState(
    [(s: any) => s.actions.map[actionId], (s: any) => s.actions.outcome],
    [actionId],
  );

  return (
    <div css={cls.container}>
      {action.type === 'functionCall' && <FunctionCall action={action} />}
      {action.type === 'createAccount' && <CreateAccount action={action} />}
      {action.type === 'deleteAccount' && <DeleteAccount action={action} />}
      {action.type === 'deleteKey' && <DeleteKey action={action} />}
      {action.type === 'deployContract' && <DeployContract />}
      <h2>Outcome</h2>
      <p>{outcome}</p>
    </div>
  );
};
