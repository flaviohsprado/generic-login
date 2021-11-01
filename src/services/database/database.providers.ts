import { createConnection } from 'typeorm';
import { join } from 'path';

require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',

    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        username: String(process.env.DB_USERNAME),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_DATABASE),
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
        ssl: true,
      }),
  },
];
