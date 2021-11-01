import { File } from './file.entity';
export declare class User {
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
    companyId?: string;
    companyName?: string;
    createdAt: Date;
    updatedAt: Date;
    file: File;
}
