"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileProviders = void 0;
const file_entity_1 = require("../../entities/file.entity");
exports.fileProviders = [
    {
        provide: 'FILE_REPOSITORY',
        useFactory: (connection) => connection.getRepository(file_entity_1.File),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=file.provider.js.map