import { css } from '@emotion/react';

const containerBase = css`
  height: 36px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  user-select: none;
`;

const nonActiveContainer = css`
  ${containerBase};
  background: rgb(145 118 176 / 50%);
  cursor: pointer;
  &:hover {
    background: rgb(145 118 176 / 65%);
  }
`

const activeContainer = css`
  ${containerBase};
  background: #9176b0;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
`;

export const cls = {
  nonActiveContainer,
  activeContainer,
};
