import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { cls } from './DeleteKey.css';
import { useStoreActions, useStoreEffects } from '../../../../../../storio';
import { useEffect } from 'react';

interface Props {
  action: any;
}

export const DeleteKey = ({ action }: Props) => {
  const setFormData = useStoreActions((a: any) => a.actions.setFormData);
  const deleteKey = useStoreEffects((actions: any) => actions.actions.deleteKey);

  const { handleSubmit, register, getValues } = useForm({ defaultValues: action.formData });

  const onSubmit = handleSubmit((values) => {
    deleteKey(values);
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
        Public Key To Delete
        <Input register={register} name="publicKey" />
      </span>
      <button onClick={onSubmit} css={cls.button}>
        Submit
      </button>
    </div>
  );
};
