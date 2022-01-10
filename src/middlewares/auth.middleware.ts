import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { IAuthRequest } from 'src/interfaces/authRequest.interface';
import { IAuth } from '../interfaces/auth.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private jwtService: JwtService;

  constructor() {
    this.jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });
  }

  use(req: IAuthRequest, res: Response, next: NextFunction) {
    if (req.method === 'POST') return next();

    if (!req.headers.authorization) throw new UnauthorizedException();

    const token = req.headers.authorization.split(' ')[1];

    const userValidated: IAuth = this.jwtService.verify<IAuth>(token);

    req.user = {
      id: userValidated.id,
      username: userValidated.username,
      email: userValidated.email,
      companyId: userValidated.companyId,
      companyName: userValidated.companyName,
    };

    next();
  }
}
