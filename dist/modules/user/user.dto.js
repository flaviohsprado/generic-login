"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDTO = void 0;
const uuidv4_1 = require("uuidv4");
class CreateUserDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        else {
            this.updatedAt = new Date();
        }
    }
}
exports.CreateUserDTO = CreateUserDTO;
//# sourceMappingURL=user.dto.js.map