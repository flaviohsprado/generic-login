import { uuid } from 'uuidv4';

export class CreateUserDTO {
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
    props: Omit<
      CreateUserDTO,
      'id' | 'dateOfBirth' | 'createdAt' | 'updatedAt'
    >,
    id?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    } else {
      this.updatedAt = new Date();
    }
  }
}
