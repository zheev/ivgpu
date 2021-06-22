import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TypeUser } from './TypeUser';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  typeId: number;

  @OneToMany(() => TypeUser, (type) => type.id)
  type: TypeUser;
}
