import { useStoreState } from '../../../../storio';
import { FunctionCall } from './FunctionCall/FunctionCall';
import { CreateAccount } from './CreateAccount/CreateAccount';
import { DeleteAccount } from './DeleteAccount/DeleteAccount';
import { DeleteKey } from './DeleteKey/DeleteKey';
import { cls } from './Action.css';

interface Props {
  actionId: any;
}

export const Action = ({ actionId }: Props) => {
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
      <h2>Outcome</h2>
      <p>{outcome}</p>
    </div>
  );
};
