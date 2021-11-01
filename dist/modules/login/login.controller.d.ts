import { AuthService } from 'src/services/auth/auth.service';
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
}
