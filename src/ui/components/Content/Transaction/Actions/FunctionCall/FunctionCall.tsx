import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { cls } from './FunctionCall.css';
import { useStoreActions, useStoreEffects } from '../../../../../../storio';
import { useEffect } from 'react';

interface Props {
  action: any;
}

export const FunctionCall = ({ action }: Props) => {
  const setFormData = useStoreActions((a: any) => a.actions.setFormData);
  const functionCall = useStoreEffects((e: any) => e.actions.functionCall);

  const { handleSubmit, register, getValues } = useForm({ defaultValues: action.formData });

  const onSubmit = handleSubmit((values) => {
    functionCall(values);
  });

  useEffect(
    () => () => {
      setFormData({
        actionId: action.actionId,
        formData: getValues(),
      });
    },
    [],
  );

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
      <button onClick={onSubmit} css={cls.button}>Submit</button>
    </div>
  );
};
