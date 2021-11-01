export declare class CreateUserDTO {
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
    constructor(props: Omit<CreateUserDTO, 'id' | 'createdAt' | 'updatedAt'>, id?: string);
}
