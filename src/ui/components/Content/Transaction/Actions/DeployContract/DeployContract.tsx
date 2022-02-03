import { useForm } from 'react-hook-form';
import { Input } from '../../../../general/Input/Input';
import { useStoreActions, useStoreEffects } from '../../../../../../storio';
import { cls } from './DeployContract.css';
import { useEffect } from 'react';

interface Props {
  action: any;
}

export const DeployContract = ({ action }: Props) => {
  const setFormData = useStoreActions((a: any) => a.actions.setFormData);
  const deployContract = useStoreEffects((e: any) => e.actions.deployContract);

  const { handleSubmit, register, getValues } = useForm({ defaultValues: action.formData });

  const onSubmit = handleSubmit((values) => {
    deployContract(values);
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
        Contract WASM
        <Input register={register} name="contractWasmFile" type="file" />
      </span>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
