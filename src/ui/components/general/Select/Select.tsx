import { cls } from './Select.css';

interface Props {
  value: any;
  onChange: any;
  options: any;
  styles?: any;
}

export const Select = ({ styles, value, onChange, options }: Props) => (
  <select css={[cls.select, styles]} onChange={(e) => onChange(e.target.value)} value={value}>
    {options.map((option: any) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
