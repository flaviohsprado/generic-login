import { File } from 'src/entities/file.entity';

export interface IUser {
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
  file?: File;
}
