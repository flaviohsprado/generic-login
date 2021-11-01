import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryColumn()
  id: string;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250 })
  email: string;

  @Column({ length: 250 })
  website: string;

  address?: string;

  @Column()
  phone?: string;

  @Column({ length: 250 })
  colorPalette: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;
}
