import { cls } from './CreateAccount.css';

interface Props {
  action: any;
}

export const CreateAccount = ({ action }: Props) => (
  <div css={cls.container}>
    <p>Create Account</p>
  </div>
);
