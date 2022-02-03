import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { useStoreActions, useStoreEffects } from '../../../../../../storio';
import { cls } from './DeleteAccount.css';

interface Props {
  action: any;
}

export const DeleteAccount = ({ action }: Props) => {
  const setFormData = useStoreActions((a: any) => a.actions.setFormData);
  const deleteAccount = useStoreEffects((e: any) => e.actions.deleteAccount);

  const { handleSubmit, register, getValues } = useForm({ defaultValues: action.formData });

  const onSubmit = handleSubmit((values) => {
    deleteAccount(values);
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
        Signer Account / Target
        <Input register={register} name="signerId" />
      </div>
      <span css={cls.inputLabel}>
        Signer Key
        <Input register={register} name="signerSk" />
      </span>
      <span css={cls.inputLabel}>
        Beneficiary Account Id
        <Input register={register} name="beneficiaryId" />
      </span>
      <button onClick={onSubmit} css={cls.button}>
        Submit
      </button>
    </div>
  );
};
