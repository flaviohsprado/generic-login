import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250, nullable: true })
  email: string;

  @Column({ length: 250, nullable: true })
  website: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ length: 250, nullable: true })
  colorPalette: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;
}
