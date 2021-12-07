import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

export class EmailUtils {
  constructor(private userRepository: Repository<User>) {}

  public async checkEmailAlreadyExists(email: string): Promise<boolean> {
    const emailAlreadyExistis = await this.userRepository.findOne({
      where: { email },
    });

    return !!emailAlreadyExistis;
  }
}
