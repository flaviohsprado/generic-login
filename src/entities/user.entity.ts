import { Entity, Column, PrimaryColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ length: 250 })
  username: string;

  @Column({ length: 250 })
  password: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 250 })
  firstName?: string;

  @Column({ length: 250 })
  lastName?: string;

  @Column()
  dateOfBirth?: Date;

  @Column()
  phoneNumber?: string;

  @Column({ length: 500 })
  address?: string;

  @Column()
  city?: string;

  @Column()
  country?: string;

  @Column()
  token?: string;

  @Column()
  company: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
