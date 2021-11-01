import { JwtService } from '@nestjs/jwt';
export declare class WebTokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    verifyToken(token: string): any;
}
