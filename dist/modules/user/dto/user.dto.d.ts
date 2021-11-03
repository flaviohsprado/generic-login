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
    companyId?: string;
    companyName?: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: Omit<UserDTO, 'id' | 'createdAt' | 'updatedAt'>, id?: string);
    encryptPassword(): Promise<UserDTO>;
}
