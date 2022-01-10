import { useForm } from 'react-hook-form';
import { Input } from '../../../general/Input/Input';
import { cls } from './FunctionCall.css';

interface Props {
  action: any;
}

// @ts-ignore
export const FunctionCall = ({ action }: Props) => {
  const methods = useForm({
    defaultValues: {
      signerAccount: 'eclipseeer.testnet',
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((val) => {
    console.log(val);
  });

  return (
    <div css={cls.container}>
      <div css={cls.inputLabel}>
        Signer Account
        <Input register={register} name="signerAccount" />
      </div>
      <span css={cls.inputLabel}>
        Signer Key
        <Input register={register} name="signerKey" />
      </span>
      <span css={cls.inputLabel}>
        Contract Id
        <Input register={register} name="contractId" />
      </span>
      <span css={cls.inputLabel}>
        Method
        <Input register={register} name="method" />
      </span>
      <span css={cls.inputLabel}>
        Params
        <Input register={register} name="params" textarea cols={30} rows={10} />
      </span>
      <span css={cls.inputLabel}>
        Gas (Terra)
        <Input register={register} name="gas" />
      </span>
      <span css={cls.inputLabel}>
        Attached Deposit ($NEAR)
        <Input register={register} name="attachedDeposit" />
      </span>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
