"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTokenService = void 0;
class WebTokenService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    verifyToken(token) {
        return this.jwtService.verify(token);
    }
}
exports.WebTokenService = WebTokenService;
//# sourceMappingURL=jwt.service.js.map