"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuidv4_1 = require("uuidv4");
class User {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map