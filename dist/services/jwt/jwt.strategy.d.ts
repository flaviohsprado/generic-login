import { Strategy } from 'passport-jwt';
import { IAuth } from 'src/interfaces/auth.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: IAuth): Promise<{
        id: string;
        username: string;
        email: string;
        companyId: string;
        companyName: string;
    }>;
}
export {};
