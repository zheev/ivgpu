import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  abbreviature: string;

}
