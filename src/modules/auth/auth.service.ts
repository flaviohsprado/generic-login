import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import CryptographyService from 'src/services/criptography.service';
import { IAuth, IAuthCredentials } from 'src/interfaces/auth.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<IUser, 'password'>> {
    const user = await this.userService.findByKey('email', email);

    const decriptedPassword: string = await CryptographyService.decrypt(
      password,
    );

    if (user && user.password === decriptedPassword) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: IAuthCredentials) {
    const userValidated: Omit<IUser, 'password'> = await this.validateUser(
      user.email,
      user.password,
    );

    const payload: IAuth = {
      id: userValidated.id,
      username: userValidated.username,
      email: userValidated.email,
      companyId: userValidated.companyId,
      companyName: userValidated.companyName,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
