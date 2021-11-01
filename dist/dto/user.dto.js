"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDTO = void 0;
const uuidv4_1 = require("uuidv4");
const criptography_service_1 = require("../services/criptography.service");
class UserDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
    }
    async encryptPassword() {
        this.password = await criptography_service_1.default.encrypt(this.password);
        return this;
    }
}
exports.UserDTO = UserDTO;
//# sourceMappingURL=user.dto.js.map