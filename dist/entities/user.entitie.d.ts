export declare class User {
    id: string;
    name: string;
    password: string;
    email: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date;
    phoneNumber?: string;
    address?: string;
    city?: string;
    country?: string;
    token?: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(props: Omit<User, 'id'>, id?: string);
}
