import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class EmailUtils {
    private userRepository;
    constructor(userRepository: Repository<User>);
    checkEmailAlreadyExists(email: string): Promise<boolean>;
}
