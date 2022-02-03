import { css } from '@emotion/react';
import { button } from '../general/buttonCss';

const container = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const inputLabel = css`
  width: 99%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const cls = {
  container,
  inputLabel,
  button,
};
