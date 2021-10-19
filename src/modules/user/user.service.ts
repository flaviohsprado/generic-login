import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { UserDTO } from '../../dto/user.dto';
import { IUser } from '../../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async findByUsername(username: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { username },
    });
  }

  async findByFirstName(firstName: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { firstName },
    });
  }

  async findByLastName(lastName: string): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { lastName },
    });
  }

  async findByBirthDate(dateOfBirth: String): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { dateOfBirth },
    });
  }

  async findByPhoneNumber(phoneNumber: String): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { phoneNumber },
    });
  }

  async findByAddress(address: String): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { address },
    });
  }

  async findByCity(city: String): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { city },
    });
  }

  async findByCountry(country: String): Promise<IUser> {
    return await this.userRepository.findOne({
      where: { country },
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
