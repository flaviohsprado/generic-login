import { uuid } from 'uuidv4';
import { ApiProperty } from '@nestjs/swagger';
import Cryptography from 'src/services/criptography.service';
import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';
import { File } from 'src/entities/file.entity';

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
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    required: true,
  })
  @IsEmail()
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
  @IsMobilePhone('pt-BR')
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

  file: File;

  constructor(
    props: Omit<
      UserDTO,
      'encryptPassword' | 'hideSensitiveData' | 'encodeSensitiveData'
    >,
    id?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }

  public async encryptPassword(): Promise<UserDTO> {
    this.password = await Cryptography.encrypt(this.password);
    return this;
  }

  public hideSensitiveData(): UserDTO {
    this.password = null;
    this.token = null;
    this.createdAt = null;
    this.updatedAt = null;
    this.dateOfBirth = null;
    this.phoneNumber = null;

    return this;
  }

  public encodeSensitiveData(): UserDTO {
    this.id = '##########';
    this.password = '******';
    this.token = null;
    this.createdAt = null;
    this.updatedAt = null;
    this.dateOfBirth = null;
    this.phoneNumber =
      this.phoneNumber.substring(0, 3) +
      '******' +
      this.phoneNumber.substring(9);

    return this;
  }
}
