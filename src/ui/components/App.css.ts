import { css } from '@emotion/react';

const container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7d6fb;
`;

const card = css`
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  display: grid;
  grid-template-columns: 250px 20px auto 20px;
  grid-template-rows: 60px auto 20px;
  grid-template-areas:
    'a . b .'
    'a . c .'
    'a . . .'
;
  border-radius: 20px;
  background: linear-gradient(254.11deg, #f8f6fb 19.78%, #ebe2f3 68.67%);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
`;

export const cls = {
  container,
  card,
};
