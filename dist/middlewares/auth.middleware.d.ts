import { NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { IAuthRequest } from 'src/interfaces/authRequest.interface';
export declare class AuthMiddleware implements NestMiddleware {
    private jwtService;
    constructor();
    use(req: IAuthRequest, res: Response, next: NextFunction): void;
}
