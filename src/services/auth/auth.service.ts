import { Injectable } from '@nestjs/common';
import { UserService } from '../../modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import Criptography from '../criptography.service';
import { IUser } from 'src/modules/user/interfaces/user.interface';
import { IAuth, IAuthCredentials } from 'src/interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<IUser, 'password'>> {
    const user = await this.usersService.findByKey('username', username);

    const decryptedPassword = await Criptography.decrypt(user.password);

    if (user && decryptedPassword === password) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: IAuth) {
    const payload: IAuth = {
      id: user.id,
      username: user.username,
      email: user.email,
      companyId: user.companyId,
      companyName: user.companyName,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
