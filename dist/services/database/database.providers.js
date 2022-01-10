"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
require('dotenv').config();
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: String(process.env.DB_HOST),
            port: Number(process.env.DB_PORT),
            username: String(process.env.DB_USERNAME),
            password: String(process.env.DB_PASSWORD),
            database: String(process.env.DB_DATABASE),
            entities: [
                (0, path_1.join)(__dirname, '**', '*.entity.{ts,js}'),
                ,
                './dist/entities/*.js',
            ],
            migrations: [(0, path_1.join)(__dirname, '**', '*.migration.{ts,js}')],
            cli: {
                migrationsDir: 'migrations',
            },
            synchronize: true,
            ssl: process.env.ENVIOREMENT === 'dev' ? false : true,
            extra: process.env.ENVIOREMENT === 'prod'
                ? {
                    ssl: {
                        rejectUnauthorized: false,
                    },
                }
                : {},
        }),
    },
];
//# sourceMappingURL=database.providers.js.map