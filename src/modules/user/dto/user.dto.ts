import { uuid } from 'uuidv4';
import { ApiProperty } from '@nestjs/swagger';
import Cryptography from 'src/services/criptography.service';

export class UserDTO {
  @ApiProperty()
  id: string;
  @ApiProperty({
    description: 'User name or your "Nick Name"',
    required: true,
  })
  username: string;
  @ApiProperty({
    description:
      'Password it is recommended to have at least 8 characters and contain at least Uppercase Letters, Lowercase Letters, Numbers and Non-alphanumeric Characters.',
    required: true,
  })
  password: string;
  @ApiProperty({
    required: true,
  })
  email: string;
  @ApiProperty({
    required: false,
  })
  firstName?: string;
  @ApiProperty({
    required: false,
  })
  lastName?: string;
  @ApiProperty({
    required: false,
  })
  dateOfBirth?: string;
  @ApiProperty({
    required: false,
  })
  phoneNumber?: string;
  @ApiProperty({
    required: false,
  })
  address?: string;
  @ApiProperty({
    required: false,
  })
  city?: string;
  @ApiProperty({
    required: false,
  })
  country?: string;
  @ApiProperty({
    required: false,
  })
  token?: string;
  @ApiProperty({
    required: false,
  })
  createdAt: Date;
  @ApiProperty({
    required: false,
  })
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
    this.password = await Cryptography.encrypt(this.password);
    return this;
  }
}
