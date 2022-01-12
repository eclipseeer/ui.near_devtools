import { useForm } from 'react-hook-form';
import { Input } from '../../../general/Input/Input';
import { cls } from './DeleteAccount.css';
import { useStoreEffects } from '../../../../../storio';

// interface Props {
//   action: any;
// }

// @ts-ignore
export const DeleteAccount = () => {
  const deleteAccount = useStoreEffects((actions: any) => actions.actions.deleteAccount);
  const methods = useForm({
    defaultValues: {
      signerId: 'abc2.eclipseer.linkdrop.testnet',
      signerSk: 'ed25519:2W3McSV6SGxtiuPEGzjoXi8REqUoEJFAT65JKC9J77UzApSFQQvm9Q6ofWU1px1iVMLzQFWiE2gZ1jWc6f617guA',
      beneficiaryId: 'eclipseer.linkdrop.testnet'
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
