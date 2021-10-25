import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import CryptographyService from 'src/services/criptography.service';
import { IAuth } from 'src/interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByKey('username', username);

    const decriptedPassword: string = await CryptographyService.decrypt(
      password,
    );

    if (user && user.password === decriptedPassword) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: IAuth) {
    const payload = {
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
