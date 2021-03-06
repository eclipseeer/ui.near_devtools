import { css } from '@emotion/react';

const input = css`
  height: 48px;
  width: 90vw;
  max-width: 800px;
  position: relative;
  display: inline-flex;
  border: 3px solid #a463b0;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  background-color: inherit;
  box-sizing: border-box;
  padding: 5px 15px;
`;

const error = css`
  color: red;
  font-size: 14px;
  text-shadow: 0 0 5px black;
  margin-top: 4px;
`;

const textarea = css`
  ${input};
  height: auto;
`;

export const cls = {
  input,
  textarea,
  error,
};
