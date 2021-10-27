import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class File {
  @PrimaryColumn()
  id: string;

  @Column()
  ownerId: string;

  @Column()
  ownerType: string;

  @Column()
  key: string;

  @Column()
  url: string;
}
