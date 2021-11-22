import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import FileUpload from '../../utils/file.utils';
import { FileDTO } from '../file/dto/file.dto';
//import { File } from 'src/entities/file.entity';
import { FileService } from '../file/file.service';
import { IFile } from 'src/interfaces/file.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import StandardError from 'src/utils/error.utils';

@Injectable()
export class UserService {
  private httpService: HttpService;

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private fileRepository: FileService,
  ) {}

  async findAll(): Promise<IUser[]> {
    const users = await this.userRepository.find();
    //const users = new UserDTO(await this.userRepository.find());

    for (const user of users) {
      let userAux = new UserDTO({ ...user }).hideSensitiveData();
      userAux.file = await this.fileRepository.findByKey('ownerId', user.id);

      Object.assign(user, userAux);
    }

    return users;
  }

  async findByKey(key: string, value: string): Promise<IUser> {
    const user = await this.userRepository.findOne({
      where: { [key]: value },
    });

    let userAux = new UserDTO({ ...user }).encodeSensitiveData();

    if (user)
      userAux.file = await this.fileRepository.findByKey('ownerId', user.id);

    Object.assign(user, userAux);

    return user;
  }

  async create(user: UserDTO, files: FileDTO[]): Promise<IUser> {
    if (await this.checkEmailAlreadyExists(user.email))
      throw new StandardError(202, 'Email already exists');

    const filesPaths = await FileUpload.upload(files, user.id, 'user');

    await this.fileRepository.create(filesPaths);

    return await this.userRepository.save(user);
  }

  async update(id: string, user: UserDTO, files: FileDTO[]): Promise<IUser> {
    if (await this.checkEmailAlreadyExists(user.email))
      throw new Error('Email already exists');

    const userAvatar: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    if (files.length) {
      if (userAvatar) {
        await FileUpload.delete([userAvatar.key]);
        await this.fileRepository.destroy([userAvatar]);
      }

      const filesPaths = await FileUpload.upload(files, id, 'user');
      await this.fileRepository.create(filesPaths);
    }

    await this.userRepository.save({ ...user, id });

    return await this.userRepository.findOne(id);
  }

  async destroy(id: string): Promise<void> {
    const userAvatar: IFile = await this.fileRepository.findByKey(
      'ownerId',
      id,
    );

    await FileUpload.delete([userAvatar.key]);

    await this.fileRepository.destroy([userAvatar]);

    await this.userRepository.delete(id);
  }

  async checkEmailAlreadyExists(email: string): Promise<boolean> {
    const emailAlreadyExistis = await this.userRepository.findOne({
      where: { email },
    });

    return !!emailAlreadyExistis;
  }
}
