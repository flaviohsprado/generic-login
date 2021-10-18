import { createConnection } from 'typeorm';
import { join } from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postdba',
        database: 'GenericLogin',
        entities: [
          join(__dirname, '**', '*.entity.{ts,js}'),
          ,
          './dist/entities/*.js',
        ],
        migrations: [join(__dirname, '**', '*.migration.{ts,js}')],
        cli: {
          migrationsDir: 'migrations',
        },
        synchronize: true,
      }),
  },
];
