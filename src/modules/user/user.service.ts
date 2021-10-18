import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  get(): string {
    return "Get [{ name: 'flávio' }]";
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
