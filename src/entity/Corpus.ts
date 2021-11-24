import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Corpus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({array: true, type: 'text'})
  transport: Array<String>;
}
