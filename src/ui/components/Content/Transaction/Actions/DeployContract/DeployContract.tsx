import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { useStoreEffects } from '../../../../../../storio';
import { cls } from './DeployContract.css';

export const DeployContract = () => {
  const deployContract = useStoreEffects((e: any) => e.actions.deployContract);

  const methods = useForm({
    defaultValues: {
      signerId: '',
      signerSk: '',
      contractWasmFile: null,
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((values) => {
    deployContract(values);
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
        Contract WASM
        <Input register={register} name="contractWasmFile" type="file" />
      </span>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

