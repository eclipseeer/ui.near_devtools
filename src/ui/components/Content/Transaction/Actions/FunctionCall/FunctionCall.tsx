import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { cls } from './FunctionCall.css';
import { useStoreEffects } from '../../../../../../storio';

interface Props {
  action: any;
}
// drop key
// ed25519:w4Nb233J1hzb6tywhabjTKjsAysz9Y9N3fbDwzG3BU6 - ed25519:3V5rYNwYfYsSRzuAr8jhf64D6kRwppuy9k3m8CxXQxqNHLa2dGAe162sZNUwjXJxfkGtvf8XnG42qV5MnYrJcocW
export const FunctionCall = ({ action }: Props) => {
  const functionCall = useStoreEffects((e: any) => e.actions.functionCall);
  const methods = useForm({
    defaultValues: {
      signerId: 'eclipseer.testnet',
      signerSk: 'ed25519:3bSABeVuEqo442igK9Q9jMCm8jwvZ4Td1bYFhBQmJ5uSzLTTobyYSjz8G9tyD3UFS2ZBbneM91WtqJzpCtVT9ect',
      contractId: 'dev-1636123728779-29153762080548',
      methodName: 'nft_transfer_call',
      args: `{
        "token_id": "2",
        "receiver_id": "abc2.eclipseer.linkdrop.testnet",
        "msg": "ed25519:w4Nb233J1hzb6tywhabjTKjsAysz9Y9N3fbDwzG3BU6"
      }`,
      terraGas: '50',
      attachedDeposit: '',
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((values) => {
    functionCall(values);
  });

  return (
    <div css={cls.container}>
      <div css={cls.inputLabel}>
        Signer Account
        <Input register={register} name="signerId" />
      </div>
      <span css={cls.inputLabel}>
        Signer Key
        <Input register={register} name="signerSk" />
      </span>
      <span css={cls.inputLabel}>
        Contract Id
        <Input register={register} name="contractId" />
      </span>
      <span css={cls.inputLabel}>
        Method
        <Input register={register} name="methodName" />
      </span>
      <span css={cls.inputLabel}>
        Arguments
        <Input register={register} name="args" textarea cols={30} rows={10} />
      </span>
      <span css={cls.inputLabel}>
        Gas (Terra)
        <Input register={register} name="terraGas" />
      </span>
      <span css={cls.inputLabel}>
        Attached Deposit ($NEAR)
        <Input register={register} name="attachedDeposit" />
      </span>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
