import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class ErrorMiddleware implements NestMiddleware {
    constructor();
    use(req: Request, res: Response, next: NextFunction): {
        message: any;
        statusCode: any;
        status: string;
    };
}
