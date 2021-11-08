"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcClientOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.grpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: 'localhost:3001',
        package: 'user',
        protoPath: (0, path_1.join)(__dirname, './user.proto'),
    },
};
//# sourceMappingURL=grpc-user.options.js.map