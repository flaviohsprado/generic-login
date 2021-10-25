import { uuid } from 'uuidv4';
import Criptography from 'src/services/criptography.service';

export class UserDTO {
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

  constructor(
    props: Omit<UserDTO, 'id' | 'createdAt' | 'updatedAt'>,
    id?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }

  async encryptPassword(): Promise<UserDTO> {
    this.password = await Criptography.encrypt(this.password);
    return this;
  }
}
