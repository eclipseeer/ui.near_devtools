import { useStoreState } from '../../../../storio';
import { FunctionCall } from './FunctionCall/FunctionCall';
import { CreateAccount } from './CreateAccount/CreateAccount';
import { cls } from './Action.css';

interface Props {
  actionId: any;
}

export const Action = ({ actionId }: Props) => {
  const action = useStoreState((state: any) => state.actions.map[actionId], [actionId]);

  return (
    <div css={cls.container}>
      <p>
        <b>{action.type}</b>
      </p>
      {action.type === 'functionCall' && <FunctionCall action={action} />}
      {action.type === 'createAccount' && <CreateAccount action={action} />}
    </div>
  );
};
