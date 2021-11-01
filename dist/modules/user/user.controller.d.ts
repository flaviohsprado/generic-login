import { UserDTO } from './dto/user.dto';
import { IUser } from './interfaces/user.interface';
import { UserService } from './user.service';
import { FileDTO } from '../file/dto/file.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<IUser[]>;
    findById(id: string): Promise<IUser>;
    findByEmail(email: string): Promise<IUser>;
    findByUsername(username: string): Promise<IUser>;
    findByFirstName(firstName: string): Promise<IUser>;
    findByLastName(lastName: string): Promise<IUser>;
    findByBirthDate(birthDate: string): Promise<IUser>;
    findByPhoneNumber(phoneNumber: string): Promise<IUser>;
    findByAddress(address: string): Promise<IUser>;
    findByCity(city: string): Promise<IUser>;
    findByCountry(country: string): Promise<IUser>;
    create(files: FileDTO[], createUserDTO: UserDTO): Promise<IUser>;
    update(files: FileDTO[], id: string, user: UserDTO): Promise<IUser>;
    delete(id: string): Promise<void>;
}
