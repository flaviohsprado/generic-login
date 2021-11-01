"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WebTokenModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTokenModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../jwt/jwt.strategy");
const user_service_1 = require("../../modules/user/user.service");
const jwt_service_1 = require("./jwt.service");
require('dotenv').config();
let WebTokenModule = WebTokenModule_1 = class WebTokenModule {
};
WebTokenModule = WebTokenModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '86400s' },
            }),
        ],
        providers: [user_service_1.UserService, jwt_strategy_1.JwtStrategy, jwt_service_1.WebTokenService],
        exports: [WebTokenModule_1, jwt_service_1.WebTokenService],
    })
], WebTokenModule);
exports.WebTokenModule = WebTokenModule;
//# sourceMappingURL=jwt.module.js.map