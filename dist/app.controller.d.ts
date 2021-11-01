import { AuthService } from './services/auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): any;
}
