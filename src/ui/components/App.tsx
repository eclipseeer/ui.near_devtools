import { css } from '@emotion/react';

const container = css`
  background-color: red;
  color: aliceblue;
  @media (min-width: 1000px) {
    background-color: black;
  }
`;

export const App = () => <div css={container}>App</div>;
