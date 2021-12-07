import { uuid } from 'uuidv4';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';

export class CompanyDTO {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email?: string;

  @IsNotEmpty()
  website?: string;

  @IsNotEmpty()
  address?: string;

  @IsMobilePhone()
  phone?: string;

  @IsNotEmpty()
  colorPalette?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    props: Omit<CompanyDTO, 'id' | 'createdAt' | 'updatedAt'>,
    id?: string,
  ) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }
}
