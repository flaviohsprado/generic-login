import { Company } from '../../entities/company.entity';
import { File } from '../../entities/file.entity';
import { User } from '../../entities/user.entity';
import { CompanyService } from '../company/company.service';
import { FileService } from '../file/file.service';
import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
const http = require('http');

describe('UserController', () => {
  let userRepository: Repository<User>;
  let userService: UserService;
  let userController: UserController;

  let fileService: FileService;
  let fileRepository: Repository<File>;

  let companyService: CompanyService;
  let companyRepository: Repository<Company>;

  beforeEach(() => {
    userRepository = new Repository<User>();
    fileRepository = new Repository<File>();
    companyRepository = new Repository<Company>();

    fileService = new FileService(fileRepository);
    companyService = new CompanyService(companyRepository);
    userService = new UserService(userRepository, fileService, companyService);

    userController = new UserController(userService);
  });

  const user: IUser = new UserDTO({
    id: null,
    username: 'Flávio Prado',
    password: '123',
    email: 'flavio.pprado24@gmail.com',
    phoneNumber: '+55 17 99680-3615',
    dateOfBirth: '27/03/2000',
    companyName: 'Girabels Technology S.A',
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: null,
    lastName: null,
    address: null,
    city: null,
    country: null,
    token: null,
    companyId: null,
    file: null,
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      /*jest
        .spyOn(userService, 'findAll')
        .mockImplementation(
          () => new Promise((resolve, reject) => resolve(user)),
        );*/

      expect(await userController.findAll()).toBe({});
    });
  });
});
