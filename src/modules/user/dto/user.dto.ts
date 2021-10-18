import { uuid } from 'uuidv4';

export class CreateUserDTO {
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

  constructor(props: Omit<CreateUserDTO, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
