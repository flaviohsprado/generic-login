import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class FileMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { files } = req;

    /*const mappedFiles: IFile[] = ((files as Express.Multer.File[]) || []).map(
      (file) => ({
        name: `${file.originalname.split('.').pop()}`,
        type: file.mimetype,
        content: file.buffer,
        size: file.size,
        extension: `${file.originalname.split('.').pop()}`,
      }),
    );

    Object.assign(req.body, { files: mappedFiles });
*/
    next();
  }
}
