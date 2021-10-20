import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../../modules/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { UserService } from 'src/modules/user/user.service';
require('dotenv').config();

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
