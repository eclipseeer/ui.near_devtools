import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { cls } from './DeleteAccount.css';
import { useStoreEffects } from '../../../../../../storio';

interface Props {
  action: any;
}

export const DeleteAccount = ({ action }: Props) => {
  const deleteAccount = useStoreEffects((e: any) => e.actions.deleteAccount);
  const methods = useForm({
    defaultValues: {
      signerId: '',
      signerSk: '',
      beneficiaryId: ''
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((values) => {
    deleteAccount(values);
  });

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
