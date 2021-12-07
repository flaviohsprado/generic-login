import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { IAuth } from '../interfaces/auth.interface';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private jwtService: JwtService;

  constructor() {
    this.jwtService = new JwtService({
      secret: process.env.JWT_SECRET,
    });
  }

  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST') return next();

    if (!req.headers.authorization) throw new UnauthorizedException();

    const token = req.headers.authorization.split(' ')[1];

    const userValidated: IAuth = this.jwtService.verify<IAuth>(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyMTEyZDkwLTBkMWMtNDgzNy05N2Y2LWIzNGIyYjlkOWY2NCIsInVzZXJuYW1lIjoiRmzDoXZpbyBQcmFkbyIsImVtYWlsIjoiZmxhdmlvLnBwcmFkbzE2QGdtYWlsLmNvbSIsImNvbXBhbnlJZCI6bnVsbCwiY29tcGFueU5hbWUiOiJUZXN0ZTAxIiwiaWF0IjoxNjM3ODUwNjA0LCJleHAiOjE2Mzc5MzcwMDR9.lShsfu6tW9L6BREMRcz0FVHWbx0CNXRNLzLNwZZcq4o',
    );

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
