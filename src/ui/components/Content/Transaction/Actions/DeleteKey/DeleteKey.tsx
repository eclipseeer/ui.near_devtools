import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { cls } from './DeleteKey.css';
import { useStoreEffects } from '../../../../../../storio';

interface Props {
  action: any;
}

export const DeleteKey = ({ action }: Props) => {
  const deleteKey = useStoreEffects((actions: any) => actions.actions.deleteKey);
  const methods = useForm({
    defaultValues: {
      signerId: 'eclipseeer2.testnet',
      signerSk:
        'ed25519:rth5jioLiJiHUtRQ2i7Xebw1Frd2bMS45ufEZiErue15ME1kRnuzGfpTpQ9jFhekeJi1wQMmTiL4fKq7avbCxDU',
      publicKey: '',
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((values) => {
    deleteKey(values);
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
        Public Key To Delete
        <Input register={register} name="publicKey" />
      </span>
      <button onClick={onSubmit} css={cls.button}>
        Submit
      </button>
    </div>
  );
};
