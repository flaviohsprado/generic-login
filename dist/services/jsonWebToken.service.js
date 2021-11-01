"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_interface_1 = require("../interfaces/auth.interface");
class JsonWebTokenService {
    async generateToken(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '7d',
        });
    }
    async verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
    }
}
exports.default = new JsonWebTokenService();
//# sourceMappingURL=jsonWebToken.service.js.map