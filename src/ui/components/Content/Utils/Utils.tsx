import { GenerateSeedPhrase } from './GenerateSeedPhrase/GenerateSeedPhrase';
import { cls } from './Utils.css';

export const Utils = () => (
  <div css={cls.container}>
    <GenerateSeedPhrase />
  </div>
);
