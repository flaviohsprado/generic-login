"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandardError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.default = StandardError;
//# sourceMappingURL=error.utils.js.map