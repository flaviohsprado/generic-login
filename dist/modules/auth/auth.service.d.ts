import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IAuthCredentials } from 'src/interfaces/auth.interface';
import { IUser } from 'src/modules/user/interfaces/user.interface';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Omit<IUser, 'password'>>;
    login(user: IAuthCredentials): Promise<{
        accessToken: string;
    }>;
}
