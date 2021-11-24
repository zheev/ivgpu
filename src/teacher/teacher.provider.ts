import { Connection } from 'typeorm';
import { Teacher } from '../entity/Teacher';

export const teacherProviders = [
  {
    useFactory: (connection: Connection) => connection.getRepository(Teacher),
    inject: ['DATABASE_CONNECTION'],
  },
];