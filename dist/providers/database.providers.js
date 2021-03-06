"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await (0, typeorm_1.createConnection)({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postdba',
            database: 'GenericLogin',
            entities: ['src/entities/*.ts', './build/src/entity/*.js'],
            migrations: ['src/migrations/**/*.ts'],
            cli: {
                migrationsDir: 'migrations',
            },
            synchronize: true,
        }),
    },
];
//# sourceMappingURL=database.providers.js.map