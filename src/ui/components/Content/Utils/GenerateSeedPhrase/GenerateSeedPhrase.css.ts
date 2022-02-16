import { css } from '@emotion/react';

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const button = css`
  width: 200px;
`;

const rows = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const row = css`
  display: flex;
  justify-content: space-between;
`;

const rowValue = css`
  width: 90%;
  text-align: end;
  overflow-wrap: anywhere;
`;

export const cls = {
  container,
  button,
  rows,
  row,
  rowValue,
};
