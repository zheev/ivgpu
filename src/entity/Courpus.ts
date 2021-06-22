import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Courpus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  transport: Array<String>;
}
