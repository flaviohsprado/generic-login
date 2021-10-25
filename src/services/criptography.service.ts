import {
  Cipher,
  CipherKey,
  createCipheriv,
  createDecipheriv,
  Decipher,
  scrypt,
} from 'crypto';
import { promisify } from 'util';

class CryptographyService {
  private readonly alg: string;
  private readonly iv: Buffer;
  private key: CipherKey;
  private cipher: Cipher;
  private decipher: Decipher;

  constructor() {
    this.iv = Buffer.from('😳😳😳😳');
    this.alg = 'aes-256-ctr';
  }

  async setCipherConfigurations(): Promise<void> {
    this.key = (await promisify(scrypt)(
      String(process.env.SECRET),
      'salt',
      32,
    )) as Buffer;
    this.cipher = createCipheriv('aes-256-ctr', this.key, this.iv);
  }

  async setDecipherConfigurations(): Promise<void> {
    this.key = (await promisify(scrypt)(
      String(process.env.SECRET),
      'salt',
      32,
    )) as Buffer;
    this.decipher = createDecipheriv('aes-256-ctr', this.key, this.iv);
  }

  async encrypt(text: string): Promise<string> {
    await this.setCipherConfigurations();
    const encryptedText = Buffer.concat([
      this.cipher.update(text),
      this.cipher.final(),
    ]);

    return encryptedText.toString('hex');
  }

  async decrypt(text: string): Promise<string> {
    await this.setDecipherConfigurations();

    const encryptedTextBuffer = Buffer.from(text);

    const decryptedText = Buffer.concat([
      this.decipher.update(encryptedTextBuffer),
      this.decipher.final(),
    ]);

    return decryptedText.toString('hex');
  }
}

export default new CryptographyService();
