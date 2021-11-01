import { IAuth } from 'src/interfaces/auth.interface';
declare class JsonWebTokenService {
    generateToken(payload: IAuth): Promise<string>;
    verifyToken(token: string): Promise<any>;
}
declare const _default: JsonWebTokenService;
export default _default;
