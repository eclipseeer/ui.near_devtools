import { css } from '@emotion/react';

const container = css`
  grid-area: a;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9176b0;
  border-radius: 20px 0 0 20px;
  //box-shadow: 1px 0px 4px rgba(0, 0, 0, 0.2);
`;

const logo = css`
  margin-top: 20px;
`;

export const cls = {
  container,
  logo,
};
