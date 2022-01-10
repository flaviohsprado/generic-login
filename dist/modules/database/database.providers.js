"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const ormconfig_1 = require("./ormconfig");
require('dotenv').config();
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory() {
            return (0, typeorm_1.createConnection)(ormconfig_1.connectionOptions);
        },
    },
];
//# sourceMappingURL=database.providers.js.map