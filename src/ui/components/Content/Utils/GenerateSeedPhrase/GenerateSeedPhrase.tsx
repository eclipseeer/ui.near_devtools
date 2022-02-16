import { generateSeedPhrase } from 'near-seed-phrase';
import { cls } from './GenerateSeedPhrase.css';
import { useStoreActions, useStoreState } from '../../../../../storio';

export const GenerateSeedPhrase = () => {
  const accessKey = useStoreState((s: any) => s.utils.accessKey);
  const setAccessKey = useStoreActions((a: any) => a.utils.setAccessKey);

  const onClick = () => {
    setAccessKey(generateSeedPhrase());
  };

  return (
    <div css={cls.container}>
      <button onClick={onClick} css={cls.button}>
        Generate Seed Phrase
      </button>
      <div css={cls.rows}>
        <div css={cls.row}>
          <span>Seed Phrase</span>
          <span css={cls.rowValue}>{accessKey.seedPhrase}</span>
        </div>
        <div css={cls.row}>
          <span>Public Key</span>
          <span css={cls.rowValue}> {accessKey.publicKey}</span>
        </div>
        <div css={cls.row}>
          <span>Secret Key</span>
          <span css={cls.rowValue}> {accessKey.secretKey}</span>
        </div>
      </div>
    </div>
  );
};
// publicKey: "ed25519:GMNmQYJRKCY6GkVSyabzFfFXvD9P3mykAmcsFQJ7sXJf"
// secretKey: "ed25519:ri9mrmhNJEJMJUxnQabztHBj19yZKN8f6uYTqaFR3FeupiHNWqrNSCwHe3rFyP78yz1K4CQJPguFG7XiMBi8hyH"
// seedPhrase
