"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (error, res) => {
    const { statusCode, message } = error;
    return {
        message: message || 'Internal Server Error',
        statusCode: statusCode || 500,
        status: 'error',
    };
};
exports.default = handleError;
//# sourceMappingURL=error.js.map