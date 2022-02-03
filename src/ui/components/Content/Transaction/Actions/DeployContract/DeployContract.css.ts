import { css } from '@emotion/react';

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

const button = css`
  width: 99%;
`;

export const cls = {
  container,
  inputLabel,
  button,
};