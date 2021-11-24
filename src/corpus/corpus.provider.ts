import { Connection } from 'typeorm';
import { Corpus } from '../entity/Corpus';

export const corpusProviders = [
  {
    useFactory: (connection: Connection) => connection.getRepository(Corpus),
    inject: ['DATABASE_CONNECTION'],
  },
];