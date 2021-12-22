import { cls } from './Tab.css';

interface Props {
  title: string
}

export const Tab = ({ title }: Props) => (
  <div css={cls.container}>{title}</div>
);
