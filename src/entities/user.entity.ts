import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { File } from './file.entity';

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

  @Column({ length: 250, nullable: true })
  firstName?: string;

  @Column({ length: 250, nullable: true })
  lastName?: string;

  @Column({ nullable: true, type: 'date' })
  dateOfBirth?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ length: 500, nullable: true })
  address?: string;

  @Column({ nullable: true })
  city?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  token?: string;

  @Column({ nullable: true })
  companyId?: string;

  @Column({ nullable: true })
  companyName?: string;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @OneToOne(() => File)
  @JoinColumn()
  file: File;
}
