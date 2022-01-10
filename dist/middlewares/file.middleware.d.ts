import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class FileMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): void;
}
