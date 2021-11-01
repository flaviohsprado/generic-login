"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const util_1 = require("util");
class CryptographyService {
    constructor() {
        this.iv = Buffer.from('😳😳😳😳');
        this.alg = 'aes-256-ctr';
    }
    async setCipherConfigurations() {
        this.key = (await (0, util_1.promisify)(crypto_1.scrypt)(String(process.env.SECRET), 'salt', 32));
        this.cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', this.key, this.iv);
    }
    async setDecipherConfigurations() {
        this.key = (await (0, util_1.promisify)(crypto_1.scrypt)(String(process.env.SECRET), 'salt', 32));
        this.decipher = (0, crypto_1.createDecipheriv)('aes-256-ctr', this.key, this.iv);
    }
    async encrypt(text) {
        await this.setCipherConfigurations();
        const encryptedText = Buffer.concat([
            this.cipher.update(text),
            this.cipher.final(),
        ]);
        return encryptedText.toString('hex');
    }
    async decrypt(text) {
        await this.setDecipherConfigurations();
        const encryptedTextBuffer = Buffer.from(text);
        const decryptedText = Buffer.concat([
            this.decipher.update(encryptedTextBuffer),
            this.decipher.final(),
        ]);
        return decryptedText.toString('hex');
    }
}
exports.default = new CryptographyService();
//# sourceMappingURL=criptography.service.js.map