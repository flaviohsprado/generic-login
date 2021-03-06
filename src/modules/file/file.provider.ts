import { Connection } from 'typeorm';
import { File } from '../../entities/file.entity';

export const fileProviders = [
  {
    provide: 'FILE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(File),
    inject: ['DATABASE_CONNECTION'],
  },
];
