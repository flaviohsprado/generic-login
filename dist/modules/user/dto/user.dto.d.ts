import { File } from 'src/entities/file.entity';
export declare class UserDTO {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    country?: string;
    token?: string;
    createdAt: Date;
    updatedAt: Date;
    file: File;
    constructor(props: Omit<UserDTO, 'encryptPassword' | 'hideSensitiveData' | 'encodeSensitiveData'>, id?: string);
    encryptPassword(): Promise<UserDTO>;
    hideSensitiveData(): UserDTO;
    encodeSensitiveData(): UserDTO;
}
