"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const authRequest_interface_1 = require("../interfaces/authRequest.interface");
let AuthMiddleware = class AuthMiddleware {
    constructor() {
        this.jwtService = new jwt_1.JwtService({
            secret: process.env.JWT_SECRET,
        });
    }
    use(req, res, next) {
        if (req.method === 'POST')
            return next();
        if (!req.headers.authorization)
            throw new common_1.UnauthorizedException();
        const token = req.headers.authorization.split(' ')[1];
        const userValidated = this.jwtService.verify(token);
        req.user = {
            id: userValidated.id,
            username: userValidated.username,
            email: userValidated.email,
            companyId: userValidated.companyId,
            companyName: userValidated.companyName,
        };
        next();
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map