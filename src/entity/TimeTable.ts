import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Teacher } from './Teacher';

@Entity()
export class TimeTable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: string;

  @OneToOne(() => Teacher, (teacher) => teacher.id)
  teacher: Teacher;

  @Column()
  number: number;

  @Column()
  week: number;

  @Column()
  day: number;

  @Column()
  typeId: number;

}
