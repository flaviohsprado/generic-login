"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDTO = void 0;
const uuidv4_1 = require("uuidv4");
class FileDTO {
    constructor(props, id) {
        Object.assign(this, props);
        if (!id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
    generateFileKey() {
        const name = this.originalname.split('.')[0];
        this.key = `${this.id}.${name}`;
        return this;
    }
}
exports.FileDTO = FileDTO;
//# sourceMappingURL=file.dto.js.map