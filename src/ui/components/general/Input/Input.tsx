import { cls } from './Input.css';

export const Input = ({
  register = () => ({}),
  name,
  placeholder,
  textarea = false,
  cols,
  rows,
}: any) =>
  textarea ? (
    <textarea
      {...register(name)}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      css={cls.textarea}
    />
  ) : (
    <input {...register(name)} placeholder={placeholder} css={cls.input} />
  );
