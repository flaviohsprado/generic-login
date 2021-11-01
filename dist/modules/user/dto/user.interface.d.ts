export interface IUser {
    id: string;
    username: string;
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
}
