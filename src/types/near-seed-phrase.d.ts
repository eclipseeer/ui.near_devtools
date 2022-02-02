type AccessKey = {
  seedPhrase: string;
  publicKey: string;
  secretKey: string;
}

declare module 'near-seed-phrase' {
  export function parseSeedPhrase(seedPhrase: string, derivationPath?: string): AccessKey;
  export function generateSeedPhrase(entropy?: string): AccessKey;
}
