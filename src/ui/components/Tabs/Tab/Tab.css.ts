import { css } from '@emotion/react';

const containerBase = css`
  height: 36px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  font-size: 14px;
  user-select: none;
  &:first-child {
    margin-top: 20px;
  }
`;

const nonActiveContainer = css`
  ${containerBase};
  cursor: pointer;
  border: 1px solid #c0b5cd;
`

const activeContainer = css`
  ${containerBase};
  background: #623d8b;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid #623d8b;
`;

export const cls = {
  nonActiveContainer,
  activeContainer,
};
