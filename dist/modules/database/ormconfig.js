"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionOptions = void 0;
const path_1 = require("path");
exports.connectionOptions = {
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
};
//# sourceMappingURL=ormconfig.js.map