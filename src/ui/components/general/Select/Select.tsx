import { cls } from './Select.css';

export const Select = ({ action, css, onChange }: any) => {
  console.log(action);
  return (
    <select
      css={[cls.select, css]}
      onChange={(e) => onChange(e.target.value)}
      value={action.type}
    >
      <option value="deleteAccount">Delete Account</option>
      <option value="functionCall">Function Call</option>
      <option value="createAccount">Create Account</option>
    </select>
  );
};
