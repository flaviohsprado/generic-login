declare class CryptographyService {
    private readonly alg;
    private readonly iv;
    private key;
    private cipher;
    private decipher;
    constructor();
    setCipherConfigurations(): Promise<void>;
    setDecipherConfigurations(): Promise<void>;
    encrypt(text: string): Promise<string>;
    decrypt(text: string): Promise<string>;
}
declare const _default: CryptographyService;
export default _default;
