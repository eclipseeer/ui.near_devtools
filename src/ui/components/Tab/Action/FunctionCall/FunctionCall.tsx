import { cls } from './FunctionCall.css';

interface Props {
  action: any;
}

export const FunctionCall = ({ action }: Props) => (
  <div css={cls.container}>Function Call Action</div>
);
