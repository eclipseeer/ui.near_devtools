import { cls } from './SelectEnvironment.css';
import { Select } from '../../general/Select/Select';
import { useStoreActions, useStoreState } from '../../../../storio';
import { useMemo } from 'react';

const getOptions = (environment: any) =>
  environment.list.map((id: string) => ({
    value: id,
    label: environment.map[id].name,
  }));

export const SelectEnvironment = () => {
  const environment = useStoreState((s: any) => s.environment);
  const select = useStoreActions((a: any) => a.environment.select);
  const options = useMemo(() => getOptions(environment), [environment]);

  return (
    <Select
      value={environment.current.id}
      options={options}
      onChange={select}
      styles={cls.select}
    />
  );
};
