import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find();
  }

  async findByKey(key: string, value: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { [key]: value },
    });
  }

  async create(user: UserDTO): Promise<IUser> {
    return await this.userRepository.save(user);
  }

  async update(id: string, user: UserDTO): Promise<IUser> {
    return await this.userRepository.save({ ...user, id });
  }

  async destroy(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
