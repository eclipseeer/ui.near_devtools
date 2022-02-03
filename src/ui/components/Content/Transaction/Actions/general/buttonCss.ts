import { css } from '@emotion/react';

export const button = css`
  height: 50px;
  width: 200px;
  align-self: center;
  border: none;
  border-radius: 10px;
  margin-top: 25px;
  color: white;
  background-color: #9176b0;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  &:hover {
    background-color: #8961b6;
    box-shadow: 0 3px 8px 0 rgb(0 0 0 / 25%);
  }
`;
