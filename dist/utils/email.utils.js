"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailUtils = void 0;
const user_entity_1 = require("../entities/user.entity");
class EmailUtils {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async checkEmailAlreadyExists(email) {
        const emailAlreadyExistis = await this.userRepository.findOne({
            where: { email },
        });
        return !!emailAlreadyExistis;
    }
}
exports.EmailUtils = EmailUtils;
//# sourceMappingURL=email.utils.js.map